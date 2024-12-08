describe("Warehouses", () => {
    
    it("Creates Warehouse", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/inventory/warehouses/create");

        // Fill out field
        cy.get("#name").type("test count").should("have.value", "test count");
        cy.get("#email").type("e@company.com").should("have.value", "e@company.com");
        cy.get("#phone").type("0987654321").should("have.value", "0987654321");
        cy.get("#address").type("15th street").should("have.value", "15th street");
        cy.get("#city").type("riyadh").should("have.value", "riyadh");
        cy.get("#zip_code").type("12345").should("have.value", "12345");
        cy.get("#state").type("riyadh").should("have.value", "riyadh");
        
        // Click on the custom dropdown input to open the dropdown
        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(0).click();
        cy.contains('.el-select-dropdown__item', 'Saudi Arabia').click();

        // Fill out description field
        cy.get("#description").type("This is an example warehouse.").should("have.value", "This is an example warehouse.");
        
        // check on no
        cy.get("#default_warehouse-0").check( {force: true} );

        // Submit the form
        cy.get('#warehouse').submit()

        cy.wait(20000)

    });
    

    it("Edits Warehouse", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/inventory/warehouses/5/edit");

        // Fill out name field
        cy.get("#name").clear().type("north-side warehouse").should("have.value", "north-side warehouse");
        cy.get("#email").clear().type("NSwarehouse@company.com").should("have.value", "NSwarehouse@company.com");
        // cy.get("#phone").clear().type("0987654321").should("have.value", "0987654321");
        // cy.get("#address").clear().type("4th street").should("have.value", "4th street");
        // cy.get("#city").clear().type("riyadh").should("have.value", "riyadh");
        // cy.get("#zip_code").clear().type("12345").should("have.value", "12345");
        // cy.get("#state").clear().type("riyadh").should("have.value", "riyadh");
        
        // Click on the custom dropdown input to open the dropdown
        // cy.get('.el-input.el-input--prefix.el-input--suffix').eq(0).click();
        // cy.contains('.el-select-dropdown__item', 'Saudi Arabia').click();

        // Fill out description field
        // cy.get("#description").type("This is an example warehouse.").should("have.value", "This is an example warehouse.");
        
        // cy.get("#default_warehouse-0").check( {force: true} );

        // Submit the form
        cy.get('#warehouse').submit()

        cy.wait(20000)

    });
    
    
    it("Deletes Warehouses", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/inventory/warehouses");

        // choose
        cy.get("#bulk-action-2").check({force: true})
        
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