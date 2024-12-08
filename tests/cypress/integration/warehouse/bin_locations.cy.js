describe("Bin Locations", () => {
    
    it("Creates Bin Location", () => {
        
        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/warehouse/bin-locations/create");
        
        // Click on the custom dropdown input to open the dropdown
        cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(0).click({ force: true });
        cy.contains('.el-select-dropdown__item', 'Al Hamra Branch').click({ force: true });
        
        // Click on the custom dropdown input to open the dropdown
        cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(1).click({ force: true });
        cy.contains('.el-select-dropdown__item', '2-1-1-1').click({ force: true });

        // Fill out rack field
        cy.get("#code").type("BL1").should("have.value", "BL1");

        // Fill out bay field
        cy.get("#width").type("1").should("have.value", "1");
        
        // Fill out length field
        cy.get("#length").type("1").should("have.value", "1");
        
        // Fill out height field
        cy.get("#height").type("1").should("have.value", "1");

        // check on Active or not
        cy.get("#is_active-1").check( {force: true} );
        // cy.get("#is_active-0").check( {force: true} );
        
        // // Submit the form
        cy.get('#binLocation').submit()

        cy.wait(20000)

    });
    

    it("Edits Bin Location", () => {
        
        cy.visit(Cypress.env('authUrl'));
    
        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);
    
        cy.visit(Cypress.env('baseUrl') + "/warehouse/bin-locations/359/edit");
        
        // Click on the custom dropdown input to open the dropdown
        // cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(0).click({ force: true });
        // cy.contains('.el-select-dropdown__item', 'Al Hamra Branch').click({ force: true });
        
        // Click on the custom dropdown input to open the dropdown
        // cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(1).click({ force: true });
        // cy.contains('.el-select-dropdown__item', '01-02-01-20').click({ force: true });
    
        // Fill out rack field
        cy.get("#code").clear().type("BL01").should("have.value", "BL1");
    
        // Fill out bay field
        // cy.get("#width").type("1").should("have.value", "1");
        
        // // Fill out length field
        // cy.get("#length").type("1").should("have.value", "1");
        
        // // Fill out height field
        // cy.get("#height").type("1").should("have.value", "1");
    
        // check on Active or not
        // cy.get("#is_active-1").check( {force: true} );
        // cy.get("#is_active-0").check( {force: true} );
        
        // // Submit the form
        cy.get('#binLocation').submit();

        cy.wait(20000);

    });

    
    it("Deletes Bin Location", () => {
        
        cy.visit(Cypress.env('authUrl'));
    
        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);
    
        cy.visit(Cypress.env('baseUrl') + "/warehouse/bin-locations");
    
        // Fill out name field
        cy.get("#bulk-action-359").check({force: true});
    
        cy.wait(5000);
    
        cy.get('button#button-bulk-action-delete').should('be.visible').click();
    
        cy.wait(5000);
    
        // cy.get('button').contains('Cancel').should('be.visible').click();
        cy.get('button').contains('Confirm').should('be.visible').click();
    
        cy.wait(10000);
                    
    });
    
});


// After finishing the test, run the following command to run the test:
// npx cypress open