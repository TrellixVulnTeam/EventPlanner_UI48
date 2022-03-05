// import { cyan } from "@material-ui/core/colors"

describe("renders the home page", () => {
    it("click login ",() =>
    {
        cy.visit("/")
        cy.get('#login').should('contain.text', 'Login');
        
    });
    it("click signup",() =>
    {
        cy.visit("/")
        cy.get('#signup').should('contain.text', 'SignUp');    
        cy.get('button').should('contain','Button')
         });

    it("renders correctly", () => {
        cy.visit("/")
        cy.get('#login').click();
        cy.wait(2000);
        cy.get('#mui-1').type("dikshaverma235@gmail.com");
        cy.get('#mui-2').type("12345678");
        cy.get('.MuiButton-root').click();

    });

});
