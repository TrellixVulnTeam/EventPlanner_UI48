


   describe("renders the home page", () => {
   
 
    it("click login ",() =>
    {
        cy.visit("/")
        cy.get('#login').should('contain.text', 'Login');
        
    });
  

    it("renders correctly", () => {
        cy.visit("/")
        cy.get('#login').click();
        cy.wait(5000);
        cy.get('#mui-1').type("simirb98@gmail.com");
        cy.get('#mui-2').type("simran123");
        cy.get('.MuiButton-root').click({ multiple: true });

    });

});







  describe('api testing using cypress for event ', () => {
    let todoItem;
    it('fetches Todo items - GET', () => {
      cy.request({
        method: 'GET',
        form: true,
        url: "/event ",
        headers: {
          'Content-Type': 'text/html',  
          token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6InNpbWlyYjk4QGdtYWlsLmNvbSIsIkZpcnN0X25hbWUiOiJTaW1yYW4iLCJMYXN0X25hbWUiOiJCaGFnd2FuZGFzYW5pIiwiVWlkIjoiNjI0M2QwMmNiN2YwNTY5ZWFhZWU1ZmI5IiwiVXNlcl90eXBlIjoiQURNSU4iLCJleHAiOjE2NTA1NTgyODh9.5fG4zv-hBRXcMe_p8ht7RmdIo4SNtGCtjfX07011Bt0",
        },
        body: {       
          "email": "simirb98@gmail.com",
          //"username": "your username", depends upon your system login you could use email or username
          "password": "simran123",
        }
      }).then(response => {
        console.log(response.body)
        const target = response.body.email;
      })
    });
 });

 
 describe('api testing using cypress for contact', () => {
  let todoItem;
  it('fetches contact items - Get', () => {
    cy.request({
      method: 'GET',
      form: true,
      url: "/query ",
      headers: {
        'Content-Type': 'text/html',  
        token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6InNpbWlyYjk4QGdtYWlsLmNvbSIsIkZpcnN0X25hbWUiOiJTaW1yYW4iLCJMYXN0X25hbWUiOiJCaGFnd2FuZGFzYW5pIiwiVWlkIjoiNjI0M2QwMmNiN2YwNTY5ZWFhZWU1ZmI5IiwiVXNlcl90eXBlIjoiQURNSU4iLCJleHAiOjE2NTA1NTgyODh9.5fG4zv-hBRXcMe_p8ht7RmdIo4SNtGCtjfX07011Bt0",
      },
      // body: {       
        
        
      // }
    }).then(response => {
      console.log(response.body);
      const target = response.body.email;
    })
  });
});

 

describe('api testing using cypress for users ', () => {
  let todoItem;
  it('fetches all users - GET', () => {
    cy.request({
      method: 'GET',
      form: true,
      url: "/users ",
      headers: {
        'Content-Type': 'text/html',  
        token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6InNpbWlyYjk4QGdtYWlsLmNvbSIsIkZpcnN0X25hbWUiOiJTaW1yYW4iLCJMYXN0X25hbWUiOiJCaGFnd2FuZGFzYW5pIiwiVWlkIjoiNjI0M2QwMmNiN2YwNTY5ZWFhZWU1ZmI5IiwiVXNlcl90eXBlIjoiQURNSU4iLCJleHAiOjE2NTA1NTgyODh9.5fG4zv-hBRXcMe_p8ht7RmdIo4SNtGCtjfX07011Bt0",
      },
     
    }).then(response => {
      console.log(response.body);
      const target = response.body.email;
    })
  });
});


























// describe('api testing using cypress for users ', () => {
//   let todoItem;
//   it('fetches all users - GET', () => {
//     cy.request({
//       method: 'POST',
//       form: true,
//       url: "/users/login",
//       headers: {
//         'Content-Type': 'text/html',  
//         token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6InNpbWlyYjk4QGdtYWlsLmNvbSIsIkZpcnN0X25hbWUiOiJTaW1yYW4iLCJMYXN0X25hbWUiOiJCaGFnd2FuZGFzYW5pIiwiVWlkIjoiNjI0M2QwMmNiN2YwNTY5ZWFhZWU1ZmI5IiwiVXNlcl90eXBlIjoiQURNSU4iLCJleHAiOjE2NTA1NTgyODh9.5fG4zv-hBRXcMe_p8ht7RmdIo4SNtGCtjfX07011Bt0",
//       },
//       body: {       


        
//         "ID": "6243d02cb7f0569eaaee5fb9",
       
//         "Password": "simran123",
      
        
//       }
//     }).then(response => {
//       console.log(response.body);
//       const target = response.body.email;
//     })
//   });
// });



