describe("Transfers", () => {

    it("Create a Transfer", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);
        
        cy.visit(Cypress.env('baseUrl') + "/banking/transfers/create");
        
        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(0).click();
        cy.contains('.el-select-dropdown__item', 'account 1 (SR)').click({force: true});

        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(1).click();
        cy.contains('.el-select-dropdown__item', 'Cash (SR)').click({force: true});

        cy.get('input[name="amount"]').type('15000');

        cy.get('#transfer').submit();

        cy.wait(20000)

    })


    it("Edits a Transfer", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/banking/transfers/create");

        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(0).click();
        cy.contains('.el-select-dropdown__item', 'account 1 (SR)').click({force: true});

        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(1).click();
        cy.contains('.el-select-dropdown__item', 'Cash (SR)').click({force: true});

        cy.get('input[name="amount"]').type('15000');

        cy.get('#transfer').submit();
        
        cy.wait(20000)

    })
    

    it("Deletes a Transfer", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/banking/transfers");

        //select transaction
        cy.get("#bulk-action-9").check({force: true})

        cy.wait(5000)

        //click on the delete button
        cy.get('#button-bulk-action-delete').should('be.visible').click();

        cy.wait(5000)

        cy.get('button').contains('Cancel').should('be.visible').click();
        // cy.get('button').contains('Confirm').should('be.visible').click();

        cy.wait(20000);

    });
})