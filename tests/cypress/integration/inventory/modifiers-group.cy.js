describe("Modifier Group", () => {
    
    it("Create Modifier Group", () => {
        
        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/inventory/modifiers-group/create");

        // Fill out fields
        cy.get("#name").type("testModi group").should("have.value", "testModi group");
        cy.get("#min").type("20").should("have.value", "20");
        cy.get("#max").type("30").should("have.value", "30");
        
        // Click on the custom dropdown input to open the dropdown
        cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(0).click({ force: true });
        cy.contains('.el-select-dropdown__item', 'Meart').click({ force: true });
        cy.contains('.el-select-dropdown__item', 'Fourth Modifier').click({ force: true });
        
        // Submit the form
        cy.get('#modifier').submit()

        cy.wait(20000);

    });

    
    it("Edits Modifier Group", () => {
        
        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/inventory/modifiers-group/3/edit");


        // Fill out fields
        // cy.get("#name").clear().type("testModi group").should("have.value", "testModi group");
        cy.get("#min").clear().type("10").should("have.value", "10");
        // cy.get("#max").clear().type("30").should("have.value", "30");
        
        // Click on the custom dropdown input to open the dropdown
        // cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(0).click({ force: true });
        // cy.contains('.el-select-dropdown__item', 'Meart').click({ force: true });       
        
        // Submit the form
        cy.get('#modifier').submit()

        cy.wait(20000);
        
    });

    
    it("Deletes Modifier Group", () => {
        
        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/inventory/modifiers-group");

        //Choose
        cy.get("#bulk-action-3").check({force: true})

        cy.wait(5000)

        cy.get('button#button-bulk-action-delete').should('be.visible').click();

        cy.wait(5000)

        cy.get('button').contains('Cancel').should('be.visible').click();
        // cy.get('button').contains('Confirm').should('be.visible').click();

        cy.wait(10000)
                    
    });
    
});

// After finishing the test, run the following command to run the test:
// npx cypress open