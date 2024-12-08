describe("Cost Centers", () => {

    it("Creates a Cost Center", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/cost-centers/cost-centers/create");

        cy.get('#en_GB').eq(0).type('Cost center 1').should('have.value', 'Cost center 1')
        cy.get('#code').type('CC1').should('have.value', 'CC1')
        cy.get(':nth-child(7) > #en_GB').type('This is an example cost center')
        
        cy.get('#cost-centers').submit();

        cy.wait(20000)

    })


    it("Edits a Cost Center", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/cost-centers/cost-centers/119/edit");

        cy.get('#en_GB').eq(0).type('Cost center 1').should('have.value', 'Cost center 1')
        cy.get('#code').type('CC1').should('have.value', 'CC1')
        cy.get(':nth-child(7) > #en_GB').type('This is an example cost center')
        
        cy.get('#cost-centers').submit();

        cy.wait(20000)

    })
    

    it("Deletes Cost Centers", () => {
        
        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/cost-centers/cost-centers");

        //select account
        cy.get("#bulk-action-1").check({force: true});
        
        cy.wait(5000)

        //click on the delete button
        cy.get('#button-bulk-action-delete').should('be.visible').click();

        cy.wait(5000)

        cy.get('button').contains('Cancel').should('be.visible').click();
        // cy.get('button').contains('Confirm').should('be.visible').click();

        cy.wait(20000);

    });
    
})