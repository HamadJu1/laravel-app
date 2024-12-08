// describe("transfer order", () => {


    // describe("Create transfer order", () => {
        // it("Validate fields", () => {
            // cy.visit(Cypress.env('authUrl'));
    
            // cy.get('#name_or_email').type(Cypress.env('email'));
    
            // cy.get('#password').type(Cypress.env('password'));
    
            // cy.get('#auth > .grid > .justify-center').click();
            // cy.wait(10000);

            // cy.visit(Cypress.env('baseUrl') + "/inventory/transfer-orders/create");

            // Fill out name field
            // cy.get("#transfer_order").type("transfer 1").should("have.value", "transfer 1");

            // Fill out description field
            // cy.get("#reason").type("This is an example reason.").should("have.value", "This is an example reason.");

            // Click on the dropdown input
            // First dropdown
            // cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(0).click({ force: true });
            // cy.contains('.el-select-dropdown__item', 'test count').click();

            // cy.wait(15000);

            // Second dropdown
            // Click on the second dropdown to open it
            // cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(1).click({ force: true });

            // Select "Main Warehouse" from the dropdown
            // cy.wait(2000); // Adjust the wait time as needed
            // cy.contains('.el-select-dropdown__item', 'Main Warehouse').click({ force: true });

            
            // Click on the dropdown input using { force: true }
            // cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(2).click({ force: true });
            
            // Select from the dropdown
            // cy.contains('.el-select-dropdown__item', 'group 1 (val1)').click({ force: true });
            
            // cy.wait(15000)

            // cy.get('.form-element').type('1')
            // //fill inventory
            // cy.get('el-select .el-input.el-input--prefix.el-input--suffix').eq(0).click();

            // // Select an option
            // cy.contains('.el-select-dropdown__item', 'Main Warehouse').click();

            // Submit the form
            // cy.get('#transfer-order').submit()
        // });
    // });

// });

// After finishing the test, run the following command to run the test:
// npx cypress open