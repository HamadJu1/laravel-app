describe("Transactions", () => {

    it("Creates an income", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/banking/transactions/create?type=income");

        cy.wait(5000);
        
        // cy.get('.el-input.el-input--prefix.el-input--suffix').eq(0).click();
        // cy.contains('.el-select-dropdown__item', 'Cash').click();
        
        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(1).click();
        cy.contains('.el-select-dropdown__item', 'الانماء بنك (SR)').click();
        
        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(2).click();
        cy.contains('.el-select-dropdown__item', '874 - Natus').click();
        
        cy.get('input[name="amount"]').type('10');
        
        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(3).click();
        cy.contains('.el-select-dropdown__item', 'selling point of sale').click();
        
        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(4).click();
        cy.contains('.el-select-dropdown__item', 'Walk-in Customer').click();

        cy.get('#transaction').submit();

        cy.wait(20000);

    })


    it("Creates an expense", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/banking/transactions/create?type=expense");

        cy.wait(5000);
        
        // cy.get('.el-input.el-input--prefix.el-input--suffix').eq(0).click();
        // cy.contains('.el-select-dropdown__item', 'Cash').click();
        
        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(1).click();
        cy.contains('.el-select-dropdown__item', 'الانماء بنك (SR)').click();
        
        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(2).click();
        cy.contains('.el-select-dropdown__item', '216 - Wages Payable - Payroll').click();
        
        cy.get('input[name="amount"]').type('10000');
        
        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(3).click();
        cy.contains('.el-select-dropdown__item', 'رواتب').click();
        
        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(4).click();
        cy.contains('.el-select-dropdown__item', 'التامينات الاجتماعية').click();

        cy.get('#transaction').submit();

        cy.wait(20000);

    })


    it("Edits a Transaction", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/banking/transactions/3163/edit");

        cy.wait(5000);
        
        // cy.get('.el-input.el-input--prefix.el-input--suffix').eq(0).click();
        // cy.contains('.el-select-dropdown__item', 'Cash').click();
        
        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(1).click();
        cy.contains('.el-select-dropdown__item', 'Cash (SR)').click();
        
        // cy.get('.el-input.el-input--prefix.el-input--suffix').eq(2).click();
        // cy.contains('.el-select-dropdown__item', '874 - Natus').click();
        
        // cy.get('input[name="amount"]').clear().type('10');
        
        // cy.get('.el-input.el-input--prefix.el-input--suffix').eq(3).click();
        // cy.contains('.el-select-dropdown__item', 'Sales').click();
        
        // cy.get('.el-input.el-input--prefix.el-input--suffix').eq(4).click();
        // cy.contains('.el-select-dropdown__item', 'Walk-in Customer').click();

        cy.get('#transaction').submit();

        cy.wait(20000)

    })
    
    it("Deletes a Transaction", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/banking/transactions");

        //select account
        cy.get("#bulk-action-3163").check({force: true});

        cy.wait(5000);

        //click on the delete button
        cy.get('#button-bulk-action-delete').should('be.visible').click();

        cy.wait(5000);

        cy.get('button').contains('Cancel').should('be.visible').click();
        // cy.get('button').contains('Confirm').should('be.visible').click();

        cy.wait(20000);

    });

})