package controllers

import (
	"fmt"

	"github.com/gin-gonic/gin"
)

func PushNotifs() gin.HandlerFunc {
	return func(c *gin.Context) {

		fmt.Println("Log Active users")
		fmt.Println("wait for trigger")
	}
}
