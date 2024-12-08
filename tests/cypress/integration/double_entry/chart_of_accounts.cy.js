describe("Chart of Accounts", () => {

    it("Creates a Chart of Account", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/double-entry/chart-of-accounts/create");

        cy.get('#en_GB').eq(0).type('Cost center 1').should('have.value', 'Cost center 1')
        cy.get('#code').type('CC1').should('have.value', 'CC1')
        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(0).click();
        cy.contains('.el-select-dropdown__item', 'Bank & Cash').click();
        cy.get(':nth-child(8) > #en_GB').type('This is an example cost center')
        
        // cy.get('#chart-of-account').submit();

        cy.wait(20000)

    })


    it("Edits a Chart of Account", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/double-entry/chart-of-accounts/2/edit");

        // cy.get('#en_GB').eq(0).type('Cost center 1').should('have.value', 'Cost center 1')
        // cy.get('#code').type('CC1').should('have.value', 'CC1')
        // cy.get('.el-input.el-input--prefix.el-input--suffix').eq(0).click();
        // cy.contains('.el-select-dropdown__item', 'Bank & Cash').click();
        cy.get(':nth-child(8) > #en_GB').clear().type('This is an example cost center edit')
        
        // cy.get('#chart-of-account').submit();

        cy.wait(20000)

    })
    

    it("Deletes a Chart of Account", () => {
        
        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/double-entry/chart-of-accounts");

        //select account
        cy.get("#bulk-action-3").check({force: true});
        
        cy.wait(5000)

        //click on the delete button
        cy.get('#button-bulk-action-delete').should('be.visible').click();

        cy.wait(5000)

        cy.get('button').contains('Cancel').should('be.visible').click();
        // cy.get('button').contains('Confirm').should('be.visible').click();

        cy.wait(20000);

    });
    
})