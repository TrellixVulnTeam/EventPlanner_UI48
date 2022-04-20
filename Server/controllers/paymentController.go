package controllers

import (
	"log"
	"net/http"
	"fmt"
	"context"
	"strconv"
	//"time"
	"go.mongodb.org/mongo-driver/bson"
	//"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"github.com/SimranBhagwandasani/EventPlanner/database"
	"github.com/gin-gonic/gin"
	"github.com/stripe/stripe-go/v72"
  "github.com/stripe/stripe-go/v72/price"
  "github.com/go-playground/validator/v10"
  "github.com/SimranBhagwandasani/EventPlanner/models"
  "github.com/stripe/stripe-go/v72/product"
	"github.com/stripe/stripe-go/v72/checkout/session"
)

var validatePayment = validator.New()

func CreateCheckoutSession() gin.HandlerFunc {
	return func(c *gin.Context) {
		var eventCollection *mongo.Collection = database.OpenCollection(database.Client, "events")
		stripe.Key = "sk_test_51Ko7SIBldx1WlAU0CepzRr8Ka4TN9tZ87K3nfaUxvX8wbJVW3TwBj7nBKJPv20rPrlAUyvjkW95J474XYBYQKNRa00kjYL8SWB"
		domain := "http://localhost:9000"

		c.Header("Content-Type", "application/x-www-form-urlencoded")
		c.Header("Access-Control-Allow-Origin", "*")
		c.Header("Access-Control-Allow-Methods", "POST")
		c.Header("Access-Control-Allow-Headers", "Content-Type")

		//var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)
		var payment models.Payment
		//var event models.Event

		if err := c.BindJSON(&payment); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error_aa": err.Error()})
			return
		}

		validationErr := validatePayment.Struct(payment)
		if validationErr != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error_vv": validationErr.Error()})
			return
		}
		filter := bson.D{
			{"$and",
					bson.A{
							bson.D{
									{"event_id", *payment.Event_id},
							},
					},
			},
		}
		var result bson.M
		// check for errors in the finding
		if err := eventCollection.FindOne(context.TODO(), filter).Decode(&result); err != nil {
				panic(err)
		}
		// if err := c.BindJSON(&result); err != nil {
		// 	c.JSON(http.StatusBadRequest, gin.H{"error_aa": err.Error()})
		// 	return
		// }
		// display the document retrieved
		fmt.Println("displaying the first result from the search filter")
		fmt.Println(result["event_name"].(string))
	

		

    productParams := &stripe.ProductParams{
      Name: stripe.String(result["event_name"].(string)),
      Description : stripe.String(result["location"].(string)),
    }
    product, _ := product.New(productParams)
	amount,_ := strconv.ParseInt(result["price"].(string),0,64)
	qty,_ := strconv.ParseInt(*payment.Quantity,0,64)
    priceParams := &stripe.PriceParams{
      Currency : stripe.String(string(stripe.CurrencyUSD)),
      UnitAmount: stripe.Int64(amount*qty*100),
      Product: stripe.String(string(product.ID)),
    }
    p, _ := price.New(priceParams)

		params := &stripe.CheckoutSessionParams{
			LineItems: []*stripe.CheckoutSessionLineItemParams{
				&stripe.CheckoutSessionLineItemParams{
					// Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          Price: stripe.String(string(p.ID)),
					Quantity: stripe.Int64(1),
				},
			},
			Mode:       stripe.String(string(stripe.CheckoutSessionModePayment)),
			SuccessURL: stripe.String(domain + "?success=true"),
			CancelURL:  stripe.String(domain + "?canceled=true"),
		}

		s, err := session.New(params)
    log.Printf("Status :%v",s.Status)
		c.JSON(http.StatusOK, gin.H{
			"data": s.URL})

		if err != nil {
			log.Printf("session.New: %v", err)
			return
		}
	}
}
