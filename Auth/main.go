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

	fmt.Println("Server running on port:",port)
	router := gin.New()
	router.Use(gin.Logger())

	routes.AuthRoutes(router)
	routes.UserRoutes(router)

	router.GET("/api-1", func(c *gin.Context) {
		c.JSON(200, gin.H{"success": "Access Granted:1"})
	})

	router.GET("/api-2", func(c *gin.Context) {
		c.JSON(200, gin.H{"success": "Access Granted:2"})
	})

	router.Run(":" + port)

	fmt.Println("Auth testing.")
}
