# Sofware Engineering : Sprint 3
- Back End : Rahul Bhatia , Simran Bhagwandasani

## User Scenarios (covered)
- `Admin Role`
    - Admin can add new event.
    - Push Notification of various types.
- `Server Functionalities`
    - OTPs for authentication and welcome mails using `smtp` server.
    - Maintains a Database of Online users over particular server instance using `Postgress`.
- `TicketPurchase`
    - A unique `QR` code sent to user for every ticket.
    - Payment Verififed using `webhook`.

## Tech Stack
- `Backend` : GoLang
- `Frontend` : ReactJs
- `Databases` : MongoCluster, PostgressSQL

## Setup 
- Running Server
    - cd server 
    - psql -u Postgres
    - \l Tripplanner 
    - go run main.go
## EndPoints

- ### Admin
    - POST `/admin/notifis` : Admin can send notifications to 3 type of audience (1.Users currently online to particular server, 2. All the users in the global MongoDB, 3. All the ticket holders for a following event.)
    - Body 
        ```javascript
        {
            "type": "online", [online,all_user,ticket_holders]
            "Notif_type": "sale", [sale,location_change,event_change]
            "message": "cutom_message",
        }
        ```
    - Response
    ```javascript
        {
            "Success": "True" [True,False]
        }
    ```
- ### Admin
    - GET `/ticket` : Admin can send notifications to 3 type of audience (1.Users currently online to particular server, 2. All the users in the global MongoDB, 3. All the ticket holders for a following event.)
    - Body 
        ```javascript
        {
            "type": "online", [online,all_user,ticket_holders]
            "Notif_type": "sale", [sale,location_change,event_change]
            "message": "cutom_message",
        }
        ```
    - Response
    ```javascript
        {
            "Success": "True" [True,False]
        }
    ``` 
    
    ## video link - https://youtu.be/HngI1kdnaho
