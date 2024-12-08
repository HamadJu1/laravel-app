describe("Quotations", () => {

    it("Creates Quotation", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/sales/estimates/create");

        // Find the button by its class and click it
        cy.get('button.w-full').eq(0).click();
        cy.contains('Walk-in Customer').click();

        // Click and choose a day from the expiry calender
        // cy.get('.data-value-min > .relative > .form-control').click();
        
        //choose an item
        cy.get('#select-item-button-13').click();
        cy.contains('span', '087').click();

        cy.get('#document').submit();

        cy.wait(20000)

    });


    it("Edits Quotation", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/sales/estimates/4049/edit");

        // Find the button by its class and click it
        cy.get('button.w-full').eq(0).click();
        cy.contains('Walk-in Customer').click();
        
        //choose an item
        // cy.get('#select-item-button-13').click();
        // cy.contains('span', 'G1 (val1)').click();

        //choose an item
        cy.get('#select-item-button-42').click();
        cy.contains('span', '11111').click();

        cy.get('#document').submit();

        cy.wait(20000)

    });
    
    
    it("Deletes Quotation", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));

        cy.get('#password').type(Cypress.env('password'));

        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/sales/estimates");

        //choose
        cy.get("#bulk-action-4049").check({force: true})
        
        cy.wait(5000)

        cy.get('#button-bulk-action-delete').should('be.visible').click();

        cy.wait(5000)

        // cy.get('button').contains('Cancel').should('be.visible').click();
        cy.get('button').contains('Confirm').should('be.visible').click();

        cy.wait(10000);

    });
});