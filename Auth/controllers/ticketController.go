package controllers

import (
	"context"
	"fmt"
	"net/http"
	"time"

	"github.com/SimranBhagwandasani/EventPlanner/database"
	"github.com/SimranBhagwandasani/EventPlanner/models"
	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"

	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

var ticketCollection *mongo.Collection = database.OpenCollection(database.Client, "tickets")
var validateTicket = validator.New()

func PurchaseTicket() gin.HandlerFunc {
	return func(c *gin.Context) {
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

		c.JSON(http.StatusOK, resultInsertionNumber)
		defer cancel()
		return
	}
}
