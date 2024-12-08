describe("Shelves", () => {
    
    it("Creates Shelve", () => {
        
        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/warehouse/shelves/create");
        
        // Click on the custom dropdown input to open the dropdown
        cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(0).click({ force: true });
        cy.contains('.el-select-dropdown__item', 'b-zone').click({ force: true });

        // choose a color
        cy.get('.w-7').click()
        cy.get('.bg-blue-500').click()

        // Fill out rack field
        cy.get("#rack").type("2").should("have.value", "2");

        // Fill out bay field
        cy.get("#bay").type("1").should("have.value", "1");
        
        // Fill out level field
        cy.get("#level").type("1").should("have.value", "1");
        
        // Fill out position field
        cy.get("#position").type("1").should("have.value", "1");
        
        // Click on the custom dropdown input to open the dropdown
        cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(1).click({ force: true });
        cy.contains('.el-select-dropdown__item', 'Empty').click({ force: true });
        
        // // Submit the form
        cy.get('#shelve').submit();

        cy.wait(20000);

    });


    it("Edits Shelve", () => {

        cy.visit(Cypress.env('authUrl'));
    
        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);
    
        cy.visit(Cypress.env('baseUrl') + "/warehouse/shelves/181/edit");
        
        // // Click on the custom dropdown input to open the dropdown
        // cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(0).click({ force: true });
        // cy.contains('.el-select-dropdown__item', 'b-zone').click({ force: true });
    
        // // choose a color
        // cy.get('.w-7').click()
        // cy.get('.bg-blue-500').click()
    
        // // Fill out rack field
        // cy.get("#rack").clear().type("2").should("have.value", "2");
    
        // // Fill out bay field
        // cy.get("#bay").clear().type("1").should("have.value", "1");
        
        // // Fill out level field
        // cy.get("#level").clear().type("1").should("have.value", "1");
        
        // // Fill out position field
        // cy.get("#position").clear().type("1").should("have.value", "1");
        
        // Click on the custom dropdown input to open the dropdown
        cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(1).click({ force: true });
        cy.contains('.el-select-dropdown__item', 'Full').click({ force: true });
        
        // // Submit the form
        cy.get('#shelve').submit();

        cy.wait(20000);

    });


    it("Deletes Shelve", () => {
        
        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/warehouse/shelves");

        // Fill out name field
        cy.get("#bulk-action-181").check({force: true})

        cy.wait(5000)

        cy.get('button#button-bulk-action-delete').should('be.visible').click();

        cy.wait(5000)

        // cy.get('button').contains('Cancel').should('be.visible').click();
        cy.get('button').contains('Confirm').should('be.visible').click();

        cy.wait(10000)
                    
    });
    
});


// After finishing the test, run the following command to run the test:
// npx cypress open