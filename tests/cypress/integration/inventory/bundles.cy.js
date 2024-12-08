describe("Bundles", () => {
    
    it("Creates Bundle", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/inventory/bundles/create");

        // Fill out fields
        cy.get("#name").type("testBundy").should("have.value", "testBundy");
        cy.get("#description").type("This is an example bundle.").should("have.value", "This is an example bundle.");
        cy.get("#price").type("30").should("have.value", "30");
        
        // Click on the custom dropdown input to open the dropdown
        cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(0).click({ force: true });
        cy.contains('.el-select-dropdown__item', '087').click({ force: true });
        
        // Submit the form
        cy.get('#bundle').submit()

        cy.wait(20000);

    });

    
    it("Edits Bundle", () => {
        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));

        cy.get('#password').type(Cypress.env('password'));

        cy.get('#auth > .grid > .justify-center').click();
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/inventory/bundles/5/edit");

        // Fill out fields
        // cy.get("#name").type("testBundy").should("have.value", "testBundy");
        // cy.get("#description").type("This is an example bundle.").should("have.value", "This is an example bundle.");
        cy.get("#price").clear().type("30").should("have.value", "40");
        
        // Click on the custom dropdown input to open the dropdown
        cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(0).click({ force: true });
        // cy.contains('.el-select-dropdown__item', '087').click({ force: true });
        cy.contains('.el-select-dropdown__item', '1111').click({ force: true });
        
        // Submit the form
        cy.get('#bundle').submit()

        cy.wait(20000);
        
    });
    
});

// After finishing the test, run the following command to run the test:
// npx cypress open