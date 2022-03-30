package controllers

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"time"

	"github.com/SimranBhagwandasani/EventPlanner/database"
	"github.com/SimranBhagwandasani/EventPlanner/models"
	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"

	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"

	"log"
	"strconv"

	"go.mongodb.org/mongo-driver/bson"
)

var eventCollection *mongo.Collection = database.OpenCollection(database.Client, "events")
var validateEvent = validator.New()

func CreateEvent() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Header("Content-Type", "application/x-www-form-urlencoded")
		c.Header("Access-Control-Allow-Origin", "*")
		c.Header("Access-Control-Allow-Methods", "POST")
		c.Header("Access-Control-Allow-Headers", "Content-Type")
		fmt.Println("called Events Route")
		var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)
		var event models.Event

		if err := c.BindJSON(&event); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error_aa": err.Error()})
			return
		}

		validationErr := validateEvent.Struct(event)
		if validationErr != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error_vv": validationErr.Error()})
			return
		}
		event.Created_at, _ = time.Parse(time.RFC3339, time.Now().Format(time.RFC3339))
		event.Updated_at, _ = time.Parse(time.RFC3339, time.Now().Format(time.RFC3339))

		event.ID = primitive.NewObjectID()
		event.Event_id = event.ID.Hex()

		resultInsertionNumber, insertErr := eventCollection.InsertOne(ctx, event)
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

type weatherData struct {
	Name string `json:"name`
	Main struct {
		Kelvin float64 `json:"temp"`
	} `json:"main"`
	Wind struct {
		Kelvin float64 `json:"speed"`
	} `json:"wind"`
}

func GetEvents() gin.HandlerFunc {
	return func(c *gin.Context) {
		var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)
		weather, err := GetWeather()
		fmt.Println(weather)
		recordPerPage, err := strconv.Atoi(c.Query("recordPerPage"))
		if err != nil || recordPerPage < 1 {
			recordPerPage = 10
		}
		page, err1 := strconv.Atoi(c.Query("page"))
		if err1 != nil || page < 1 {
			page = 1
		}

		startIndex := (page - 1) * recordPerPage
		startIndex, err = strconv.Atoi(c.Query("startIndex"))

		matchStage := bson.D{{"$match", bson.D{{}}}}
		groupStage := bson.D{{"$group", bson.D{
			{"_id", bson.D{{"_id", "null"}}},
			{"total_count", bson.D{{"$sum", 1}}},
			{"data", bson.D{{"$push", "$$ROOT"}}}}}}
		projectStage := bson.D{
			{"$project", bson.D{
				{"_id", 0},
				{"total_count", 1},
				{"user_items", bson.D{{"$slice", []interface{}{"$data", startIndex, recordPerPage}}}}}}}
		result, err := eventCollection.Aggregate(ctx, mongo.Pipeline{
			matchStage, groupStage, projectStage})
		defer cancel()
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "error occured while listing user items"})
		}
		var allusers []bson.M
		if err = result.All(ctx, &allusers); err != nil {
			log.Fatal(err)
		}
		temp, err := bson.Marshal(weather)
		fmt.Print(temp)
		c.JSON(http.StatusOK, allusers)
	}
}

func GetWeather() (weatherData, error) {
	apiConfig := os.Getenv("API_CONFIG")
	resp, err := http.Get("http://api.openweathermap.org/data/2.5/weather?APPID=" + apiConfig + "&q=gainesville")
	if err != nil {
		return weatherData{}, err
	}
	defer resp.Body.Close()

	var d weatherData
	if err := json.NewDecoder(resp.Body).Decode(&d); err != nil {
		return weatherData{}, err
	}
	return d, nil

}
