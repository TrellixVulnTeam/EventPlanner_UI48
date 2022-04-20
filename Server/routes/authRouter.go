package routes

import (
	controller "github.com/SimranBhagwandasani/EventPlanner/controllers"
	"github.com/gin-gonic/gin"
)

func AuthRoutes(incomingRoutes *gin.Engine) {
	incomingRoutes.POST("users/signup", controller.Signup())
	incomingRoutes.POST("users/login", controller.Login())
}

func Notifications(incomingRoutes *gin.Engine) {
	incomingRoutes.POST("admin/notifs", controller.PushNotifs())
}

func Payment(incomingRoutes *gin.Engine) {
	incomingRoutes.POST("/payment", controller.CreateCheckoutSession())
}

func Query(incomingRoutes *gin.Engine){
	incomingRoutes.POST("/query", controller.Query())
	incomingRoutes.GET("/query", controller.GetQueries())
}