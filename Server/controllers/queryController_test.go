package controllers
import (
	"testing"
	"fmt"
	"github.com/stretchr/testify/assert"
)

func Query(t *testing.T){
	
	jsonStr := []byte(
		`{
		"First_name":"John",
		"Message":"Please call me for this event",
		"Email":"test@jd.com"
	}`,)
	expectedSuccess := `{
		"InsertedID": "626020578ad3093eca46bd67"
	}`
	expectedError1 := `{
			"error": "token contains an invalid number of segments"
		}
		`
	expectedError2 := `{
			"error": "Query resolved."
		}`
		eq, err := http.NewRequest("POST", "/query", bytes.NewBuffer(jsonStr))
		if err != nil {
			t.Fatal(err)
		}
		req.Header.Set("Content-Type", "application/json")
		rr := httptest.NewRecorder()
		handler.ServeHTTP(rr, req)
		if status := rr.Code; status != http.StatusOK {
			t.Errorf("handler returned wrong status code: got %v want %v",
				status, http.StatusOK)
		}
		if strings.Contains(rr.Body.String(), expectedSuccess) {
		} else {
			t.Errorf("handler returned unexpected body: got %v want %v", rr.Body.String(), expected)
		}
		rr := httptest.NewRecorder()
		handler.ServeHTTP(rr, req)
		if strings.Contains(rr.Body.String(), expectedError1) {
			} else {
				t.Errorf("handler returned unexpected body: got %v want %v", rr.Body.String(), expected)
			}
			rr := httptest.NewRecorder()
			handler.ServeHTTP(rr, req)
			if strings.Contains(rr.Body.String(), expectedError2) {
				} else {
					t.Errorf("handler returned unexpected body: got %v want %v", rr.Body.String(), expected)
				}
}
func GetQueries(t *testing.T){
	var persons = Login()
	expected := []byte(
		`{
			"data": [
				{
					"total_count": 2,
					"user_items": [
						{
							"_id": "626020578ad3093eca46bd67",
							"email": "test@jd.com",
							"message": "Please call me for this event",
							"name": "John"
						},
						{
							"_id": "62602e8e5942e111ed0da788",
							"email": "john@gmail.com",
							"message": "I am John Doe, This application is amazing ",
							"name": "John Doe"
						}
					]
				}
			]
		}`,)
		eq, err := http.NewRequest("GET", "/query", bytes.NewBuffer(jsonStr))
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