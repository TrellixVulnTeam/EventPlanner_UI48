package controllers
import (
	"testing"
	"fmt"
	"github.com/stretchr/testify/assert"
)

func PurchaseTicket(t *testing.T){
	var ticket = PurchaseTicket()
	
	jsonStr := []byte(
		`{
			"Event_id":"620827ab50b1d56051a5a9f7",
			"User_id":"j61fde499a3d1ffd7dabe1d34",
			"Pay_id":"12345"
		}`,)
	expectedSuccess := `{
		"InsertedID": "6222188367512ee775a7e076"
	}`
	expectedError := `{
			"error": "token contains an invalid number of segments"
		}
		`
		eq, err := http.NewRequest("POST", "/ticket", bytes.NewBuffer(jsonStr))
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
		if strings.Contains(rr.Body.String(), expectedSuccess) {
		} else {
			t.Errorf("handler returned unexpected body: got %v want %v", rr.Body.String(), expected)
		}
}