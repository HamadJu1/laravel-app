describe("Category", () => {
    
    it("Create Category", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/settings/item/categories/create");

        // Fill out name field
        cy.get("#en_GB").type("3").should("have.value", "3");

        // choose color
        cy.get('.w-7').click()
        cy.get('.bg-gray-800').click()

        // Click on the custom dropdown input to open the dropdown
        cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').click({ force: true });
        cy.contains('.el-select-dropdown__item', 'General').click({ force: true });  


        // Submit the form
        // cy.get('#category').submit()

        cy.wait(20000);

    });


    it("Edits Category", () => {
        
        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));

        cy.get('#password').type(Cypress.env('password'));

        cy.get('#auth > .grid > .justify-center').click();
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/settings/item/categories/19/edit");

        // Fill out name field
        cy.get("#en_GB").clear().type("category 2").should("have.value", "category 2");

        // choose color
        // cy.get('.w-7').click()
        // cy.get('.bg-gray-800').click()

        // // Click on the custom dropdown input to open the dropdown
        // cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').click({ force: true });
        // cy.contains('.el-select-dropdown__item', 'General').click({ force: true });  

        
        // Submit the form
        // cy.get('#category').submit()

        cy.wait(20000);

    });


    it("Deletes Category", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));

        cy.get('#password').type(Cypress.env('password'));

        cy.get('#auth > .grid > .justify-center').click();
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/settings/item/categories");

        //choose
        cy.get("#bulk-action-12").check({force: true})
        
        cy.wait(5000)

        cy.get('button#button-bulk-action-delete').should('be.visible').click();

        cy.wait(5000)

        cy.get('button').contains('Cancel').should('be.visible').click();
        // cy.get('button').contains('Confirm').should('be.visible').click();

        cy.wait(5000)

    });
    
});

// After finishing the test, run the following command to run the test:
// npx cypress open