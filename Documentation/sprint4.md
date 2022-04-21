# Sofware Engineering : Sprint 4
- Back End : Rahul Bhatia , Simran Bhagwandasani
- Front End : Jenil Jain, Diksha Verma

## User Scenarios (covered)
- `Payments`
    - Integrated Stripe Payment gateway.
    - Stripe object generation uses `StripeCheckout` session.
- `Query Messages`
    - Users can drop their queries to the server.
    - Admins can retrive those queries and drop them responses.

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

- ### User
    - POST `/payment` : User can send the details of the event which they want to buy the ticket for along with the quantity and user_id, a unique link would be provided to user which redirects to stripe gateway where user can pay and get the ticket. The link remains active for couple of hours from generation.
    - Body 
        ```javascript
        {
            "user_id":"6243d02cb7f0569eaaee5fb9",
            "event_id":"625f9ae4be0e44a518bddedb",
            "quantity":"2"
        }
        ```
    - Response
    ```javascript
        {
            "data": "https://checkout.stripe.com/pay/cs_test_a1BWcoW3nDXWZPtz9qbBds0XCE6KWkdu5YHHgxMO9XsRuBJTls0CwDItwv#fidkdWxOYHwnPyd1blpxYHZxWjA0TmoyVkxHaWF9NFJpRFA1M3M9UVBOSWFUckdwNFFLTnNIT0N9NFBuNDdTYzREVX9yd102NlJ2SHxzbjVfTk5Ca1VQPGRSXXdkajZ%2FNnJzQ1V%2FQXVoaUoxNTVRT29mS2pIRCcpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl"
        }
    ``` 

- ### User
    - POST `/query` : User can send the query to the server, and can include the desired point of communication and their message along with the contact number.
    - Body 
        ```javascript
        {
            "First_name":"John",
            "Message":"Please call me for this event",
            "Email":"test@jd.com"
        }
        ```
    - Response
    ```javascript
        {
            "Success": "True" [True,False]
        }
    ``` 
- ### Admin
    - GET `/query` : Admin can send responses to the various queries that the user have submitted at the time of booking, checkout, or account creation.
    - Response 
        ```javascript
        {
        "user_items": [
                {
                    "_id": "626020578ad3093eca46bd67",
                    "email": "test@jd.com",
                    "message": "Please call me for this event",
                    "name": "John"
                },
        }
        ```
    ```
    
    ## video link - https://youtu.be/HngI1kdnaho
