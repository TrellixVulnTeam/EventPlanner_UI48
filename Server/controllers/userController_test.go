package controllers

import (
	"testing"
	"fmt"
	"github.com/stretchr/testify/assert"
)

func loginTest(t *testing.T){
	fmt.Println("working")
	var persons = Login()
	var jsonStr = []byte(` "First_name":"Rahul",
    "Last_name":"Bhatia",
    "Password":"rahul123",
    "Email":"rahul@gmail.com",
    "Phone":"3528883876",
    "User_type":"ADMIN"`)
	expected := []byte(
		`{
			"ID": "61fde499a3d1ffd7dabe1d34",
			"first_name": "john",
			"last_name": "doe",
			"Password": "$2a$14$qezIzFo..rNwuD9YwtSC1.0GwU4/3kPlLHGUAImgcEYKDL7rtJNaG",
			"email": "john.doe@gmail.com",
			"phone": "3528888890",
			"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6ImpvaG4uZG9lQGdtYWlsLmNvbSIsIkZpcnN0X25hbWUiOiJqb2huIiwiTGFzdF9uYW1lIjoiZG9lIiwiVWlkIjoiNjFmZGU0OTlhM2QxZmZkN2RhYmUxZDM0IiwiVXNlcl90eXBlIjoiQURNSU4iLCJleHAiOjE2NDY0NjE5MjF9.1ArsDo0H1JU98LrLG02-s5PCUHzPklgqmI-Aly4nZH8",
			"user_type": "ADMIN",
			"refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6IiIsIkZpcnN0X25hbWUiOiIiLCJMYXN0X25hbWUiOiIiLCJVaWQiOiIiLCJVc2VyX3R5cGUiOiIiLCJleHAiOjE2NDY5ODAzMjF9.uqUE-cEAhU-LRiv_hbt2DMJ802NGh_0053vb76Zx-l8",
			"address": null,
			"age": null,
			"created_at": "2022-02-05T02:44:41Z",
			"updated_at": "2022-03-04T06:32:01Z",
			"user_id": "61fde499a3d1ffd7dabe1d34"
	}`,)
		eq, err := http.NewRequest("POST", "/login", bytes.NewBuffer(jsonStr))
		if err != nil {
			t.Fatal(err)
		}
		req.Header.Set("Content-Type", "application/json")
		rr := httptest.NewRecorder()
		handler := http.HandlerFunc(LoginHandler)
		handler.ServeHTTP(rr, req)
		if status := rr.Code; status != http.StatusOK {
			t.Errorf("handler returned wrong status code: got %v want %v",
				status, http.StatusOK)
		}
		if strings.Contains(rr.Body.String(), expected) {
		} else {
			t.Errorf("handler returned unexpected body: got %v want %v", rr.Body.String(), expected)
		}
}
func SignupTest(t *testing.T){
	fmt.Println("working")
	var jsonStr = []byte(` "First_name":"Rahul",
    "Last_name":"Bhatia",
    "Password":"rahul123",
    "Email":"rahul@gmail.com",
    "Phone":"3528883876",
    "User_type":"ADMIN"`)

	req, err := http.NewRequest("POST", "/signup", bytes.NewBuffer(jsonStr))
	if err != nil {
		t.Fatal(err)
	}
	req.Header.Set("Content-Type", "application/json")
	rr := httptest.NewRecorder()
	handler := http.HandlerFunc(SignUpHandler)
	handler.ServeHTTP(rr, req)
	if status := rr.Code; status != http.StatusOK {
		t.Errorf("handler returned wrong status code: got %v want %v",
			status, http.StatusOK)
	}

	expected := `{"InsertedID": "6222153767512ee775a7e074"}`
	if strings.Contains(rr.Body.String(), expected) {
	} else {
		t.Errorf("handler returned unexpected body: got %v want %v", rr.Body.String(), expected)
	}
	req, err := http.NewRequest("POST", "/signup", bytes.NewBuffer(jsonStr))
	handler.ServeHTTP(rr, req)
	expected = `{"error": "this email or phone number already exists"}`
	if strings.Contains(rr.Body.String(), expected) {
		} else {
			t.Errorf("handler returned unexpected body: got %v want %v", rr.Body.String(), expected)
		}
}
