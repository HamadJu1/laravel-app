describe("Pay Calendars", () => {

    it("Creates a Pay Calendar", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/payroll/pay-calendars/create");

        cy.get('#name').type('Payment 1').should('have.value', 'Payment 1')
        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(0).click();
        cy.contains('.el-select-dropdown__item', 'Monthly').click();
        cy.wait(10000)
        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(1).click();
        cy.contains('.el-select-dropdown__item', 'Last working day of the month').click();
        
        cy.get('#checkbox-employees-1').check()

        cy.get('#pay-calendar').submit();

        cy.wait(20000)

    })
    

    it("Edits a Pay Calendar", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/payroll/pay-calendars/14/edit");

        // cy.get('#name').type('Payment 1').should('have.value', 'Payment 1')
        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(0).click();
        cy.contains('.el-select-dropdown__item', 'Bi-Weekly').click();
        cy.wait(10000)
        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(1).click();
        cy.contains('.el-select-dropdown__item', 'Thursday').click();
        
        // cy.get('#checkbox-employees-1').check()

        cy.get('#pay-calendar').submit();

        cy.wait(20000)

    })

    
    it("Deletes a Pay Calendar", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/payroll/pay-calendars");

        // Check
        cy.get("#bulk-action-14").check({force: true})

        cy.wait(5000)

        cy.get('#button-bulk-action-delete').should('be.visible').click();

        cy.wait(5000)

        // cy.get('button').contains('Cancel').should('be.visible').click();
        cy.get('button').contains('Confirm').should('be.visible').click();

        cy.wait(20000);

    });

})