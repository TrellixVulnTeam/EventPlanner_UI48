# Sofware Engineering : Sprint 1

## User Scenarios (covered)
- Authentication
    - Used `JWT` tokens (validity: 24hours)
    - Used `Bcrypt` to store hash password before storing in database.
- User Registration
    - Connected `MongoCluster` for persistent database.
    - Validated exisiting emails and password, along with basic contraints.
## End Points 
[PostMan collection](https://www.getpostman.com/collections/bbfa321839eea6a03376)
### SignUp
- `POST` /user/signup
    - Body
        ```javascript
        {
            "First_name":"John",
            "Last_name":"Doe",
            "Password":"^tag@1Tk-",
            "Email":"john.doe@gmail.com",
            "Phone":"0xx000000",
            "User_type":"ADMIN"
        }
        ```
    - Response
    ```javascript
        {
            "InsertedID": "61fdccf4a3d1ffd7dabe1d33"
        }
    ```
### Login
- `POST` /user/login
    - Body
        ```javascript
        {
            "Password":"^tag@1Tk-",
            "Email":"john.doe@gmail.com"
        }
        ```
    - Response
    ```javascript
        {
            "ID": "61fde499a3d1ffd7dabe1d34",
            "first_name": "john",
            "last_name": "doe",
            "Password": "$2a$14$qezIzFo..G",
            "email": "john.doe@gmail.com",
            "phone": "3528888890",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...uE",
            "user_type": "ADMIN",
            "refresh_token": "J9.S7840DUfjZ6fu..Os",
            "created_at": "2022-02-05T02:44:41Z",
            "updated_at": "2022-02-05T02:45:02Z",
            "user_id": "61fde499a3d1ffd7dabe1d34"
        }
    ```
### User
- `Get` /users
    - Header
        ```javascript
        {
            "token":"valid_token",
        }
        ```
    - Response
    ```javascript
        {
           "total_count": 6,
            "user_items": [
            {
                "_id": "61fb06155704ac3d630f0b2b",
                "created_at": "2022-02-02T17:30:45-05:00",
                "email": "..",
                "first_name": "..",
                "last_name": "..",
                "password": "..",
                "phone": "3528883876",
                "refresh_token": "ey.iLCJleHUU",
                "token": "ey-Dp5W0TOWRmgLvtwv2QT6kpIi5Mkpss",
                "updated_at": "2022-02-02T17:32:40-05:00",
                "user_id": "61fb06155704ac3d630f0b2b",
                "user_type": "ADMIN"
            },
            ]
        }
    ```
    - One can also fetch a particular user's information using `/user/User_id` which will help us to load profile and many more functionalities for the next sprint.

