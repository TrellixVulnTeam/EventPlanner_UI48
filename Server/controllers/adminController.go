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

	// hardcoded
	insertStmt := `insert into "students"("id","name", "roll") values(1,'John', 1)`
	_, e := db.Exec(insertStmt)
	CheckError(e)
	
}
func ActiveUser(user_id string,email string) error {
	psqlconn := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname)
	
	db, err := sql.Open("postgres", psqlconn)
	CheckError(err)
	insertStmt := `insert into "users"("user_id","email") values($1,$2)`
	_, e := db.Exec(insertStmt,user_id,email)
	if e != nil{
		return (e)
	}

	defer db.Close()
	return nil

	
}

func PushNotifs() gin.HandlerFunc {

	return func(c *gin.Context) {

		fmt.Println("Log Active users")
		fmt.Println("wait for trigger")
		//Connect()
		//ActiveUser("623ca31d6bb00181139c4f70","rahul123@gmail.com")
	}
}
