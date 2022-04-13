package main

import (
	"fmt"
	"os"

	routes "github.com/SimranBhagwandasani/EventPlanner/routes"
	"github.com/gin-gonic/gin"
)

func main() {
	port := os.Getenv("PORT")

	if port == "" {
		port = "8000"
	}

	fmt.Println("Server running on port:", port)
	router := gin.New()
	router.Use(gin.Logger())

	routes.AuthRoutes(router)
	routes.UserRoutes(router)
	routes.EventRoutes(router)
	routes.TicketRoutes(router)
	routes.HomeRoutes(router)
	routes.Notifications(router)
	routes.Payment(router)

	router.Run(":" + port)

	fmt.Println("Auth testing.")
}
