describe("Purchase Orders", () => {

    it("Creates Purchase Order", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/sales/purchase-orders/create");

        // Find the button by its class and click it
        cy.get('button.w-full').eq(0).click();
        cy.contains('موبايلي').click();

        // Click and choose a day from the expiry calender
        // cy.get('.data-value-min > .relative > .form-control').click();
        
        //choose an item
        cy.get('#select-item-button-13').click();
        cy.contains('span', '11111').click();

        cy.get('#document').submit();

        cy.wait(20000)

    })


    it("Edits Purchase Order", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/sales/purchase-orders/4053/edit");

        // Find the button by its class and click it
        // cy.get('button.w-full').eq(0).click();
        // cy.contains('Walk-in Customer').click();

        // Click and choose a day from the expiry calender
        // cy.get('.data-value-min > .relative > .form-control').click();

        cy.get('.flatpickr-day[aria-label="September 27, 2023"]').eq(1).click({force: true});

        //delete item
        cy.get('input[name="items.0.quantity"]').clear().type('3');

        
        //choose an item
        // cy.get('#select-item-button-22').click();
        // cy.contains('span', 'Product 5').click();

        //choose an item
        // cy.get('#select-item-button-30').click();
        // cy.contains('span', 'product 1').click();

        // cy.get('input[name="items.0.quantity"]').clear().type('3')

        cy.get('#document').submit();

        cy.wait(20000);

    })
    
    it("Deletes Purchase Order", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/sales/purchase-orders");

        // Choose
        cy.get("#bulk-action-4053").check({force: true});
        
        cy.wait(5000);

        cy.get('#button-bulk-action-delete').should('be.visible').click();

        cy.wait(5000);

        // cy.get('button').contains('Cancel').should('be.visible').click();
        cy.get('button').contains('Confirm').should('be.visible').click();

        cy.wait(10000);

    });

});