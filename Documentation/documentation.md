# [Sofware Engineering : Trripplanner.](https://astounding-begonia-3801fa.netlify.app/)

[Deployed Site](https://astounding-begonia-3801fa.netlify.app/)
## Description
One stop tickteing platform for all the college events at University of florida. Users can stop by our application to view all the events currently happening on the campus.
Organizers can contact admins to post new events, sell their ticket using our platform which is powered with Golang Monolith server to support all the transactions and secured with Stripe payment gateway. Admin can send notifications to the users regarding change in the venue, discounts on the events etc. 

## developers

- BackEnd : Rahul Bhatia, Simran Bhagwandasani
    - Tech stack : `[GoLang, Gin-gonic, GoMail, Stripe, Testify, MongoDb, skip2-Qrcodes.]`
- FrontEnd : Diksha Verma, Jenil Jain
    - Tech stack : `ReactJS`.

## Functionalities

- Authentication
    - User can Login, Signup, reset password. Usertype can be admin, user.
    - Used `JWT` tokens (validity: 24hours), `Bcrypt` to store secured password.

- EventRegistration
    - Admin can create new events, User can view all the events.
    - Past events gets deleted from server.

- Payments 
    - Registered user can buy tickets for the events.
    - Checkout is acheived using `Stripe API`.

- Ticket Generation
    - On successful payment, user revieve ticket along with the `QR over email`.
    - Admin can retrive any ticket and revoke the ticket.

- Push Notifications
    - Admin can push `notifications` to the users online.
    - Admin can put up `sale` for the upcoming events if need be.

- Support 
    - Users can leave their query for admin
    - Admin can see all the meessages and can work upon them.

## Deliverables. 
- [PostMan collection](https://www.getpostman.com/collections/bbfa321839eea6a03376)
- [Sprint1](https://github.com/SimranBhagwandasani/EventPlanner/blob/main/Documentation/sprint1.md)
- [Sprint2](https://github.com/SimranBhagwandasani/EventPlanner/blob/main/Documentation/sprint2.md)
- [Sprint3](https://github.com/SimranBhagwandasani/EventPlanner/blob/main/Documentation/sprint3.md)
- [Sprint4](https://github.com/SimranBhagwandasani/EventPlanner/blob/main/Documentation/sprint4.md) 


## Testing 
- [Functionality Demo](https://youtu.be/5ytKXgjXLeg)
- [Backend Testing](https://youtu.be/iI4VbTuFaPU)
- [cypress Testing](https://youtu.be/7RxG5-rw5AY)