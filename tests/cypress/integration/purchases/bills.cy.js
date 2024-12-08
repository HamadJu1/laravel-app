describe("Bills", () => {

    it("Create Bill", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/purchases/bills/create");

        // Find the button by its class and click it
        cy.get('button.w-full').eq(0).click();
        cy.contains('موبايلي').click();

        // Click and choose a day from the expiry calender
        // cy.get('.data-value-min > .relative > .form-control').click();
        
        //choose an item
        cy.get('#select-item-button-10').click();
        cy.contains('span', '111111').click();

        cy.get('#document').submit();

        cy.wait(20000)

    })

    
    it("Edits Bill", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/purchases/bills/4054/edit");

        // Find the button by its class and click it
        // cy.get('button.w-full').eq(0).click();
        // cy.contains('Walk-in Customer').click();

        // Click and choose a day from the expiry calender
        // cy.get('.data-value-min > .relative > .form-control').click();

        //delete item
        // cy.get('button.w-6.h-7').eq(1).click();
        
        //choose an item
        // cy.get('#select-item-button-22').click();
        // cy.contains('span', 'Product 5').click();

        //choose an item
        cy.get('#select-item-button-59').click();
        cy.contains('span', '222222').click();

        // cy.get('input[name="items.0.quantity"]').clear().type('3')

        cy.get('#document').submit();

        cy.wait(20000)

    })
    

    it("Deletes Bill", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/purchases/bills");

        // choose
        cy.get("#bulk-action-4054").check({force: true})

        cy.wait(5000)

        cy.get('#button-bulk-action-delete').should('be.visible').click();

        cy.wait(5000)

        // cy.get('button').contains('Cancel').should('be.visible').click();
        cy.get('button').contains('Confirm').should('be.visible').click();

        cy.wait(10000);

    });

});