describe("Reconciliations", () => {
    
    it("Create a Reconciliation", () => {

        cy.visit(Cypress.env('authUrl'));
        
        cy.get('#name_or_email').type(Cypress.env('email'));
        
        cy.get('#password').type(Cypress.env('password'));
        
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);
        
        cy.visit(Cypress.env('baseUrl') + "/banking/reconciliations/create");
        
        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(0).click();
        cy.contains('.el-select-dropdown__item', 'Bank (SR)').click({froce: true});

        cy.get('button').contains('Transactions').click();
        
        cy.get("#transaction-3601-income").check({force: true})
        cy.get("#transaction-3599-income").check({force: true})
        cy.get("#transaction-3597-income").check({force: true})
        cy.get("#transaction-3530-income").check({force: true})

        cy.get('#reconciliation').submit();

        cy.wait(20000)

    })

    
    it("Edits a Reconciliation", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));

        cy.get('#password').type(Cypress.env('password'));

        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);
        
        cy.visit(Cypress.env('baseUrl') + "/banking/reconciliations/3/edit");

        // cy.get('.el-input.el-input--prefix.el-input--suffix').eq(0).click();
        // cy.contains('.el-select-dropdown__item', 'Bank (SR)').click({froce: true});

        // cy.get('button').contains('Transactions').click();
        
        cy.get("#transaction-2217-expense").check({force: true});
        cy.get("#transaction-3039-expense").check({force: true});

        cy.get('#reconciliation').submit();

        cy.wait(20000)

    })
    

    it("Deletes a Reconciliation", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));

        cy.get('#password').type(Cypress.env('password'));

        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);
        
        cy.visit(Cypress.env('baseUrl') + "/banking/reconciliations");

        cy.get("#bulk-action-3").check({force: true})

        cy.wait(5000)

        cy.get('#button-bulk-action-delete').should('be.visible').click();

        cy.wait(5000)

        cy.get('button').contains('Cancel').should('be.visible').click();
        // cy.get('button').contains('Confirm').should('be.visible').click();

        cy.wait(20000);

    });

})