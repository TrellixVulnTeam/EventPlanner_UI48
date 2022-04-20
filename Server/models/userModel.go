package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type User struct {
	ID            primitive.ObjectID `bson:"_id"`
	First_name    *string            `json:"first_name" validate:"required,min=2,max=100"`
	Last_name     *string            `json:"last_name" validate:"required,min=2,max=100"`
	Password      *string            `json:"Password" validate:"required,min=6,max=15"`
	Email         *string            `json:"email" validate:"email,required"`
	Phone         *string            `json:"phone" validate:"required,min=10,max=10"`
	Token         *string            `json:"token"`
	User_type     *string            `json:"user_type" validate:"required,eq=ADMIN|eq=USER`
	Refresh_token *string            `json:"refresh_token"`
	Address       *string            `json:"address"`
	Age           *string            `json:"age"`
	Created_at    time.Time          `json:"created_at"`
	Updated_at    time.Time          `json:"updated_at"`
	User_id       string             `json:"user_id"`
}
type Event struct {
	ID         primitive.ObjectID `bson:"_id"`
	Event_name *string            `json:"event_name" validate:"required"`
	Date       *string            `json:"date" validate:"required"`
	Location   *string            `json:"location" validate:"required"`
	Time       *string            `json:"time"`
	Price      *string            `json:"price"`
	Organizer  *string            `json:"organizer"`
	Created_at time.Time          `json:"created_at"`
	Updated_at time.Time          `json:"updated_at"`
	Event_id   string             `json:"event_id"`
}
type Ticket struct {
	ID         primitive.ObjectID `bson:"_id"`
	Event_id   *string            `json:"event_id"`
	User_id    *string            `json:"user_id"`
	Pay_id     *string            `json:"pay_id"`
	Created_at time.Time          `json:"created_at"`
	Updated_at time.Time          `json:"updated_at"`
	Ticket_id  string             `json:"ticket_id"`
}
type Payment struct {
	Quantity 	*string 		`json:"quantity"`
	User_id		*string 		`json:"user_id"`
	Event_id 	*string 		`json:"event_id"`
}

type Query struct {
	ID         primitive.ObjectID `bson:"_id"`
	Name		*string 		`json:"First_name"`
	Message 	*string 		`json:"Message"`
	Email		*string 		`json:"Email"`
}