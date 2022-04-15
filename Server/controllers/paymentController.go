package controllers

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/stripe/stripe-go/v72"
  "github.com/stripe/stripe-go/v72/price"
	"github.com/stripe/stripe-go/v72/checkout/session"
)

func CreateCheckoutSession() gin.HandlerFunc {
	return func(c *gin.Context) {
		stripe.Key = "sk_test_51Ko7SIBldx1WlAU0CepzRr8Ka4TN9tZ87K3nfaUxvX8wbJVW3TwBj7nBKJPv20rPrlAUyvjkW95J474XYBYQKNRa00kjYL8SWB"
		domain := "http://localhost:9000"
    priceParams := &stripe.PriceParams{
      Currency : stripe.String(string(stripe.CurrencyUSD)),
      unitAmount: stripe.Int64(10),
      product: stripe.String("prod_LV8PWWYl9PM1FF")
    }
    p, _ := price.New(priceParams)

		params := &stripe.CheckoutSessionParams{
			LineItems: []*stripe.CheckoutSessionLineItemParams{
				&stripe.CheckoutSessionLineItemParams{
					// Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          PriceData: 
					Amount:    stripe.Int64(10),
          Currency: stripe.String(string(stripe.CurrencyUSD))
					Quantity: stripe.Int64(1),
				},
			},
			Mode:       stripe.String(string(stripe.CheckoutSessionModePayment)),
			SuccessURL: stripe.String(domain + "?success=true"),
			CancelURL:  stripe.String(domain + "?canceled=true"),
		}

		s, err := session.New(params)
		c.JSON(http.StatusOK, gin.H{
			"data": s.URL})

		if err != nil {
			log.Printf("session.New: %v", err)
			return
		}
	}
}
