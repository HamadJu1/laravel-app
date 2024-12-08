describe('Example Test', () => {
    
    it('Shows Login Page', () => {
        cy.visit(Cypress.env('authUrl'));

        cy.contains('Silky Systems');
    });

    it('LogIn', () => {
        cy.visit(Cypress.env('authUrl'));

        cy.get('input[name="email"]').type(Cypress.env('email'));

        cy.get('input[name="password"]').type('123456');

        cy.get('#auth > div > button').click();
    });

});


// After finishing the test, run the following command to run the test:
// npx cypress open