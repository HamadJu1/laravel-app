describe("Zones", () => {
    
    it("Creates Zone", () => {
        
        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/warehouse/zones/create");
        
        // Click on the custom dropdown input to open the dropdown
        cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(0).click({ force: true });
        cy.contains('.el-select-dropdown__item', 'Al Hamra Branch').click({ force: true });

        // Fill out name field
        cy.get("#name").type("Zoe 2").should("have.value", "Zoe 2");

        // Fill out code field
        cy.get("#code").type("Z2").should("have.value", "Z2");

        // Fill out description field
        cy.get("#description").type("This is an example product.").should("have.value", "This is an example product.");
        
        // // Submit the form
        cy.get('#zone').submit();

        cy.wait(20000);

    });


    it("Edits Zone", () => {
        
        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/warehouse/zones/35/edit");
        
        // Click on the custom dropdown input to open the dropdown
        // cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(0).click({ force: true });
        // cy.contains('.el-select-dropdown__item', 'Al Hamra Branch').click({ force: true });

        // Fill out name field
        cy.get("#name").clear().type("Zone 2").should("have.value", "Zone 2");

        // Fill out code field
        // cy.get("#code").clear().type("Z2").should("have.value", "Z2");

        // Fill out description field
        cy.get("#description").clear().type("This is an example zone.").should("have.value", "This is an example zone.");
        
        // // Submit the form
        cy.get('#zone').submit();

        cy.wait(20000);

    });


    it("Deletes Zone", () => {
        
        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/warehouse/zones");

        // check box
        cy.get("#bulk-action-35").check({force: true})

        cy.wait(5000)

        cy.get('#button-bulk-action-delete').should('be.visible').click();

        cy.wait(5000)

        // cy.get('button').contains('Cancel').should('be.visible').click();
        cy.get('button').contains('Confirm').should('be.visible').click();

        cy.wait(10000)
                    
    });
    
});


// After finishing the test, run the following command to run the test:
// npx cypress open