describe("Modifiers", () => {
    
    it("Creates Modifier", () => {
        
        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/inventory/modifiers/create");


        // Fill out fields
        cy.get("#name").type("testModi").should("have.value", "testModi");
        cy.get("#price").type("20").should("have.value", "20");
        cy.get("#quantity").type("3").should("have.value", "3");
        cy.get("#limit").type("100").should("have.value", "100");
        
        // Click on the custom dropdown input to open the dropdown
        cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(0).click({ force: true });
        cy.contains('.el-select-dropdown__item', 'Counter').click({ force: true });          
        
        // Click on the custom dropdown input to open the dropdown
        cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(1).click({ force: true });
        cy.contains('.el-select-dropdown__item', 'VAT (15%)').click({ force: true });          
        
        // Submit the form
        cy.get('#modifier').submit()

        cy.wait(20000);

    });

    
    it("Edits Modifier", () => {
        
        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/inventory/modifiers/8/edit");


        // Fill out fields
        // cy.get("#name").clear().type("testModi").should("have.value", "testModi");
        // cy.get("#price").clear().type("20").should("have.value", "20");
        // cy.get("#quantity").clear().type("3").should("have.value", "3");
        // cy.get("#limit").clear().type("100").should("have.value", "100");
        
        // Click on the custom dropdown input to open the dropdown
        cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(0).click({ force: true });
        cy.contains('.el-select-dropdown__item', 'Radio').click({ force: true });          
        
        // Click on the custom dropdown input to open the dropdown
        // cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(1).click({ force: true });
        // cy.contains('.el-select-dropdown__item', 'VAT (15%)').click({ force: true });          
        
        // Submit the form
        cy.get('#modifier').submit()

        cy.wait(20000);
        
    });
    
});

// After finishing the test, run the following command to run the test:
// npx cypress open