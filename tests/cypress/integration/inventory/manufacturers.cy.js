describe("Manufacturers", () => {
    
    it("Create Manufacturer", () => {
        
        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/inventory/manufacturers/create");

        // Fill out fields
        cy.get("#name").type("testManf").should("have.value", "testManf");
        cy.get("#description").type("This is an example bundle.").should("have.value", "This is an example bundle.");
        cy.get("#quantity").type("30").should("have.value", "30");
        
        // Click on the custom dropdown input to open the dropdown
        cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(0).click({ force: true });
        cy.contains('.el-select-dropdown__item', 'Cake').click({ force: true });
        
        // Submit the form
        cy.get('#manufacturer').submit()

        cy.wait(20000);

    });
    
});

// After finishing the test, run the following command to run the test:
// npx cypress open