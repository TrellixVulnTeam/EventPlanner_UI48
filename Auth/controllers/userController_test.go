package controllers

import (
	"encoding/json"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestGetAllUsers(t *testing.T){
	var persons = GetUsers()
	expected := []byte{`
		"total_count": 1,
		"user_items": [
			{
				"_id": "61fde499a3d1ffd7dabe1d34",
				"created_at": "2022-02-04T21:44:41-05:00",
				"email": "john.doe@gmail.com",
				"first_name": "john",
				"last_name": "doe",
				"password": "$2a$14$qezIzFo..rNwuD9YwtSC1.0GwU4/3kPlLHGUAImgcEYKDL7rtJNaG",
				"phone": "3528888890",
				"refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6IiIsIkZpcnN0X25hbWUiOiIiLCJMYXN0X25hbWUiOiIiLCJVaWQiOiIiLCJVc2VyX3R5cGUiOiIiLCJleHAiOjE2NDY5NDE4NjJ9.oVDGPq9q5xtH4W_sbzz-D9wU7bMJHgs2MSZ_-G50n1M",
				"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6ImpvaG4uZG9lQGdtYWlsLmNvbSIsIkZpcnN0X25hbWUiOiJqb2huIiwiTGFzdF9uYW1lIjoiZG9lIiwiVWlkIjoiNjFmZGU0OTlhM2QxZmZkN2RhYmUxZDM0IiwiVXNlcl90eXBlIjoiQURNSU4iLCJleHAiOjE2NDY0MjM0NjJ9.NVtpfFVK7aL8liCuuLEn4cGxExUjSM042Ty14Hg8Co4",
				"updated_at": "2022-03-03T14:51:02-05:00",
				"user_id": "61fde499a3d1ffd7dabe1d34",
				"user_type": "ADMIN"
			}
		]`
	}
	actual := persons
	assert.Equal(t, actual, actual)
}