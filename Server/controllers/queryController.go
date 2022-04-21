package controllers

import (
	"context"
	"fmt"
	"net/http"
	"time"
	"log"
	"strconv"
	"go.mongodb.org/mongo-driver/bson"

	"github.com/SimranBhagwandasani/EventPlanner/database"
	"github.com/SimranBhagwandasani/EventPlanner/models"
	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"

	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

var queryCollection *mongo.Collection = database.OpenCollection(database.Client, "Queries")
var validateQuery = validator.New()

// Allows the Users to post the query, saved in MongDB
func Query() gin.HandlerFunc {
	return func(c *gin.Context) {


		c.Header("Content-Type", "application/x-www-form-urlencoded")
		c.Header("Access-Control-Allow-Origin", "*")
		c.Header("Access-Control-Allow-Methods", "POST")
		c.Header("Access-Control-Allow-Headers", "Content-Type")

		var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)
		var query models.Query

		

		if err := c.BindJSON(&query); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error_aa": err.Error()})
			return
		}

		validationErr := validateQuery.Struct(query)

		if validationErr != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error_vv": validationErr.Error()})
			return
		}


		query.ID = primitive.NewObjectID()
		resultInsertionNumber, insertErr := queryCollection.InsertOne(ctx, query)

		if insertErr != nil {
			msg := fmt.Sprintf("User item was not created")
			c.JSON(http.StatusInternalServerError, gin.H{"error_message": msg})
			return
		}

		c.JSON(http.StatusOK, resultInsertionNumber)
		defer cancel()
		return
	}
}
// Admin can retrive all the queries
func GetQueries() gin.HandlerFunc {
	return func(c *gin.Context) {
		var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)
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
		result, err := queryCollection.Aggregate(ctx, mongo.Pipeline{
			matchStage, groupStage, projectStage})
		defer cancel()

		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "error occured while listing user items"})
		}

		var allQueries []bson.M
		if err = result.All(ctx, &allQueries); err != nil {
			log.Fatal(err)
		}
		c.JSON(http.StatusOK,
			gin.H{ "data" : allQueries} )
	}
}
