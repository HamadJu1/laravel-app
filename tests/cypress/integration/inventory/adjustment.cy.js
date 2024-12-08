describe("Adjusments", () => {
    
    it("Create Adjusment", () => {
        
        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));

        cy.get('#password').type(Cypress.env('password'));

        cy.get('#auth > .grid > .justify-center').click();
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/inventory/adjustments/create");

        // Click on the dropdown input
        cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(0).click({ force: true });
        cy.contains('.el-select-dropdown__item', 'Main Warehouse').eq(0).click();
        
        cy.wait(10000)

        // Click on the dropdown input using { force: true }
        cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(1).click({ force: true });
        cy.contains('.el-select-dropdown__item', 'عناصر تالفة').click({ force: true });
        
        // Click on the dropdown input using { force: true }
        cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(2).click({ force: true });
        cy.contains('.el-select-dropdown__item', 'Product 5').click({ force: true });
        
        cy.wait(10000)

        cy.get('.form-element').type('3')

        // Submit the form
        cy.get('#adjustment').submit()

        cy.wait(20000);

    });
    

    it("Edits Adjusment", () => {
        
        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));

        cy.get('#password').type(Cypress.env('password'));

        cy.get('#auth > .grid > .justify-center').click();
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/inventory/adjustments/8/edit");

        // Click on the dropdown
        cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(0).click({ force: true });
        cy.contains('.el-select-dropdown__item', 'test count').eq(0).click();
        
        cy.wait(10000)

        // Click on the dropdown input using { force: true }
        // cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(1).click({ force: true });
        // cy.contains('.el-select-dropdown__item', 'عناصر تالفة').click({ force: true });
        
        // Click on the dropdown input using { force: true }
        cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(2).click({ force: true });
        
        // Select from the dropdown
        cy.contains('.el-select-dropdown__item', 'product 1').click({ force: true });
        
        cy.wait(10000)

        // cy.get('.form-element').type('3')

        // Submit the form
        cy.get('#adjustment').submit()

        cy.wait(20000);

    });


    it("Deletes Adjusment", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/inventory/adjustments");

        // Check
        cy.get("#bulk-action-8").check({force: true})
        
        cy.wait(5000)

        cy.get('#button-bulk-action-delete').should('be.visible').click();

        cy.wait(5000)

        // cy.get('button').contains('Cancel').should('be.visible').click();
        cy.get('button').contains('Confirm').should('be.visible').click();

        cy.wait(10000);

    });
    
});
// After finishing the test, run the following command to run the test:
// npx cypress open