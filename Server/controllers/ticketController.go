package controllers

import (
	"context"
	"image"
	"os"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/SimranBhagwandasani/EventPlanner/database"
	"github.com/SimranBhagwandasani/EventPlanner/models"
	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"

	"github.com/skip2/go-qrcode"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

var ticketCollection *mongo.Collection = database.OpenCollection(database.Client, "tickets")
var validateTicket = validator.New()

func PurchaseTicket() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Header("Content-Type", "application/x-www-form-urlencoded")
		c.Header("Access-Control-Allow-Origin", "*")
		c.Header("Access-Control-Allow-Methods", "POST")
		c.Header("Access-Control-Allow-Headers", "Content-Type")
		fmt.Println("called purchase ticket")
		var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)
		var ticket models.Ticket

		if err := c.BindJSON(&ticket); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error_aa": err.Error()})
			return
		}

		validationErr := validateTicket.Struct(ticket)
		if validationErr != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error_vv": validationErr.Error()})
			return
		}
		ticket.Created_at, _ = time.Parse(time.RFC3339, time.Now().Format(time.RFC3339))
		ticket.Updated_at, _ = time.Parse(time.RFC3339, time.Now().Format(time.RFC3339))

		ticket.ID = primitive.NewObjectID()
		ticket.Ticket_id = ticket.ID.Hex()

		resultInsertionNumber, insertErr := ticketCollection.InsertOne(ctx, ticket)
		if insertErr != nil {
			fmt.Println("Inserted")
			msg := fmt.Sprintf("User item was not created")
			c.JSON(http.StatusInternalServerError, gin.H{"error_message": msg})
			return
		}

		newQr := "./static/"+ticket.Ticket_id + ".png"
		content := ticket.Ticket_id + "\n" + *ticket.Event_id
		err := qrcode.WriteFile(string(content), qrcode.Medium, 512, newQr)
		if err != nil {
			log.Fatal(err)
		}
		//c.Static("/image","./static")
		f, err := os.Open(newQr)
		image, _, err := image.Decode(f)
		c.JSON(http.StatusOK, gin.H{
			"image" : image,
			"data" : resultInsertionNumber})
		defer cancel()
		return
	}
}
func GetTicket() gin.HandlerFunc {
	return func(c *gin.Context) {

	}
}

