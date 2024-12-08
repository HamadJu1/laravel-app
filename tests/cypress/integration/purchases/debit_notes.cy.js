describe("Debit Notes", () => {

    it("Creates Debit Notes", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/credit-debit-notes/debit-notes/create");

        // Find the button by its class and click it
        cy.get('button.w-full').eq(0).click();
        cy.contains('BANK TRANSFER').click();

        cy.wait(10000)

        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(0).click();
        cy.contains('.el-select-dropdown__item', 'BILL-00018').click();

        // Click and choose a day from the expiry calender
        // cy.get('.data-value-min > .relative > .form-control').click();
        
        //choose an item
        cy.get('#select-item-button-16').click();
        cy.contains('span', '111111').click({force: true});
        
        cy.get('#select-item-button-16').click().type('222222');

        cy.get('#document').submit();

        cy.wait(20000)

    })


    it("Edits Debit Note", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/credit-debit-notes/debit-notes/4055/edit");

        // Find the button by its class and click it
        // cy.get('button.w-full').eq(0).click();
        // cy.contains('Walk-in Customer').click();

        cy.wait(10000);

        // cy.get('.el-input.el-input--prefix.el-input--suffix').eq(0).click();
        // cy.contains('.el-select-dropdown__item', 'INV-00002').click();

        // Click and choose a day from the expiry calender
        // cy.get('.data-value-min > .relative > .form-control').click();
        
        //choose an item
        // cy.get('#select-item-button-16').click();
        // cy.contains('span', 'Product 5').click();
        
        // cy.get('#select-item-button-16').click();
        // cy.contains('span', 'product 1').click();

        cy.get('button.w-6.h-7').eq(0).click();

        cy.get('#document').submit();

        cy.wait(20000);

    })
    

    it("Deletes Debit Notes", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/credit-debit-notes/credit-notes");

        // Choose
        cy.get("#bulk-action-4055").check({force: true});
        
        cy.wait(5000);

        cy.get('#button-bulk-action-delete').should('be.visible').click();

        cy.wait(5000);

        // cy.get('button').contains('Cancel').should('be.visible').click();
        cy.get('button').contains('Confirm').should('be.visible').click();

        cy.wait(10000);

    });

});