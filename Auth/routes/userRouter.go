package routes

import (
	controller "github.com/SimranBhagwandasani/EventPlanner/controllers"
	"github.com/SimranBhagwandasani/EventPlanner/middleware"

	"github.com/gin-gonic/gin"
)

func UserRoutes(incomingRoutes *gin.Engine) {
	incomingRoutes.Use(middleware.Authenticate())
	incomingRoutes.GET("/users", controller.GetUsers())
	incomingRoutes.GET("/users/:user_id", controller.GetUser())
}

func EventRoutes(incomingRoutes *gin.Engine) {
	incomingRoutes.Use(middleware.Authenticate())
	incomingRoutes.POST("/event", controller.CreateEvent())
	incomingRoutes.GET("/event", controller.GetEvents())
}

func TicketRoutes(incomingRoutes *gin.Engine) {
	incomingRoutes.Use(middleware.Authenticate())
	incomingRoutes.POST("/ticket", controller.PurchaseTicket())
}
