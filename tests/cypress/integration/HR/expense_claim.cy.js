describe("Invoices", () => {

    it("Creates an Invoice", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/expenses/expense-claims/create");

        // Find the button by its class and click it
        cy.get('button.w-full').eq(0).click();
        cy.contains('موبايلي').click();

        cy.wait(10000)

        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(0).click();
        cy.contains('.el-select-dropdown__item', 'Cashier 2').click();
        
        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(1).click();
        cy.contains('.el-select-dropdown__item', 'Rachelle Jerde').click();

        // cy.get('.el-input.el-input--prefix.el-input--suffix').eq(0).click();
        // cy.contains('.el-select-dropdown__item', 'INV-00002').click();

        // Click and choose a day from the expiry calender
        // cy.get('.data-value-min > .relative > .form-control').click();
        
        //choose an item
        cy.get('#select-item-button-41').click();
        cy.contains('span', '111111').click();
        
        cy.get('#select-item-button-41').click();
        cy.contains('span', '087').click();

        cy.get('#document').submit();

        cy.wait(20000)

    })


    it("Edits an Invoice", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/expenses/expense-claims/4056/edit");

        // Find the button by its class and click it
        // cy.get('button.w-full').eq(0).click();
        // cy.contains('Walk-in Customer').click();

        cy.wait(10000)

        // cy.get('.el-input.el-input--prefix.el-input--suffix').eq(0).click();
        // cy.contains('.el-select-dropdown__item', 'INV-00002').click();

        // Click and choose a day from the expiry calender
        // cy.get('.data-value-min > .relative > .form-control').click();
        
        //choose an item
        // cy.get('#select-item-button-16').click();
        // cy.contains('span', 'Product 5').click();
        
        // cy.get('#select-item-button-16').click();
        // cy.contains('span', 'product 1').click();

        cy.get('button.w-6.h-7').eq(3).click();

        cy.get('#document').submit();

        cy.wait(20000)

    })
    

    it("Deletes an Invoice", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/expenses/expense-claims");

        // Check
        cy.get("#bulk-action-4056").check({force: true})
        
        cy.wait(5000)

        cy.get('#button-bulk-action-delete').should('be.visible').click();

        cy.wait(5000)

        cy.get('button').contains('Cancel').should('be.visible').click();
        // cy.get('button').contains('Confirm').should('be.visible').click();

        cy.wait(10000);

    });

})