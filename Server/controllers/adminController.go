package controllers

import (
	"database/sql"
	"fmt"
	_ "github.com/lib/pq"
	"github.com/gin-gonic/gin"
)

const (
	host     = "localhost"
	port     = 5432
	user     = "postgres"
	password = "pass"
	dbname   = "tripplanner"
)

func CheckError(err error) {
	if err != nil {
		panic(err)
	}
}

func Connect() {
	psqlconn := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname)

	db, err := sql.Open("postgres", psqlconn)
	CheckError(err)

	defer db.Close()

	// insert
	// hardcoded
	insertStmt := `insert into "students"("id","name", "roll") values(1,'John', 1)`
	_, e := db.Exec(insertStmt)
	CheckError(e)
	
}

func PushNotifs() gin.HandlerFunc {

	return func(c *gin.Context) {

		fmt.Println("Log Active users")
		fmt.Println("wait for trigger")
		Connect()
	}
}
