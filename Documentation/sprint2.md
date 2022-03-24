# Sofware Engineering : Sprint 2
- Back End : Rahul Bhatia , Simran Bhagwandasani
- Front End : Jenil Jain, Diksha Verma

## User Scenarios (covered)
- EventRegistration
    - User can add new event.
    - Update the number of tickets.
- TicketPurchase
    - Can purchase ticket for the particular event.

### Event
- `POST` /event
    - Body
        ```javascript
        {
            "date": "2022-03-03",
            "event_id": "622185e36c753b4321123c9a",
            "event_name": "Evenus",
            "location": "hshja",
            "organizer": "hasmne",
        }
        ```
    - Response
    ```javascript
        {
            "InsertedID": "61fdccf4a3d1ffd7dabe1d33"
        }
    ```
- `Get` /event
    - Header
        ```javascript
        {
            "token":"valid_token",
        }
        ```
    - Response
    ```javascript
        {
            "total_count": 1,
            "user_items": [
            {
                "_id": "620456d3c1a2300e50c27443",
                "created_at": "2022-02-09T19:05:39-05:00",
                "date": "02.23.1998",
                "event_name": "gatornights",
                "location": "reitz union",
                "organizer": "navigators",
                "time": "10:10pm",
                "updated_at": "2022-02-09T19:05:39-05:00"
            },]
        }
    ```
### Ticket
- `POST` /ticket
    - Body
        ```javascript
        {
            "Event_id":"620827ab50b1d56051a5a9f7",
            "User_id":"j61fde499a3d1ffd7dabe1d34",
            "Pay_id":"12345"
        }
        ```
    - Response
    ```javascript
        {   
            {
                "InsertedID": "62229866ff6028ba5459c7d8"
            }
        }
    ```
- Implemented backend testing using  `_test.go` with the command `go test -v`

