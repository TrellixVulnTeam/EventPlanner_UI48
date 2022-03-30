package controllers

import (
	"database/sql"
	"fmt"
	_ "github.com/lib/pq"
	"github.com/gin-gonic/gin"
	gomail "gopkg.in/mail.v2"
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
func ActiveUser (user_id string,email string) error {
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
type ActiveUserStruct struct {
    user_id   string 
    email string 
}
func Sale() {
	mailer := gomail.NewMessage()
	mailer.SetHeader("From","setripplannergolang@gmail.com")
	mailer.SetHeader("Subject","Hurray! ENjoy 20% off")
	mailer.SetBody("text/plain","Take an Extra 20% off, just because you visited happy hours.")
	m := gomail.NewDialer("smtp.gmail.com",587,"setripplannergolang@gmail.com","setripgolang")

	psqlconn := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname)
	
	db, err := sql.Open("postgres", psqlconn)
	CheckError(err)
	selectStmt := `select * from "users"`
	rows, err := db.Query(selectStmt)
	CheckError(err)

	var users []ActiveUserStruct

	for rows.Next() {
        var user_id string
        var email string

        err = rows.Scan(&user_id, &email)

        // check errors
        CheckError(err)

        users = append(users, ActiveUserStruct{user_id: user_id, email: email})
		mailer.SetHeader("To",email)
		if err := m.DialAndSend(mailer); err!= nil {
			fmt.Println(err)
			panic(err)
		}

    }

	fmt.Println(users)


}
func welcome(email string){

}
func PushNotifs() gin.HandlerFunc {

	return func(c *gin.Context) {

		fmt.Println("Log Active users")
		fmt.Println("wait for trigger")
		//Connect()
		//ActiveUser("623ca31d6bb00181139c4f70","rahul123@gmail.com")
		Sale()
	}
}
