describe("Manual Journal", () => {

    it("Creates a Manual Journal", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/double-entry/journal-entry/create");

        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(1).click();
        cy.contains('.el-select-dropdown__item', 'Accrual').click({force: true});
        cy.get('#description').type('This is an example manual journal')
        
        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(2).click();
        cy.contains('.el-select-dropdown__item', '500 - Costs of Goods Sold').click();
        cy.get('input[name="debit"]').type('10000')

        cy.get('button[title="Add"]').click();

        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(3).click();
        cy.contains('.el-select-dropdown__item', '874 - Natus.').click({force: true});
        cy.get('input[name="credit"]').eq(1).type('10000')

        // cy.get('#chart-of-account').submit();

        cy.wait(20000)

    })


    it("Edits a  Manual Journal", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/double-entry/journal-entry/349/edit");

        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(1).click();
        cy.contains('.el-select-dropdown__item', 'Accrual').click({force: true});
        cy.get('#description').type('This is an example manual journal')
        
        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(2).click();
        cy.contains('.el-select-dropdown__item', '500 - Costs of Goods Sold').click();
        cy.get('input[name="debit"]').type('10000')

        cy.get('button[title="Add"]').click();

        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(3).click();
        cy.contains('.el-select-dropdown__item', '874 - Natus.').click({force: true});
        cy.get('input[name="credit"]').eq(1).type('10000')
        
        // cy.get('#chart-of-account').submit();

        cy.wait(20000)

    })
    

    it("Deletes a Manual Journal", () => {
        
        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/double-entry/journal-entry");

        //select account
        cy.get("#bulk-action-349").check({force: true});
        
        cy.wait(5000)

        //click on the delete button
        cy.get('#button-bulk-action-delete').should('be.visible').click();

        cy.wait(5000)

        cy.get('button').contains('Cancel').should('be.visible').click();
        // cy.get('button').contains('Confirm').should('be.visible').click();

        cy.wait(20000);

    });
    
})