describe("Composite Items", () => {
    
    it("Create Composite Item", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/composite-items/composite-items/create");


        //General
        // Select product type
        cy.get("#type-product").check({ force: true });
        // cy.get("#type-service").check({ force: true });

        // Fill out name field
        cy.get("#name").type("testProduct 1").should("have.value", "testProduct 1");
        
        // Click on the custom dropdown input to open the dropdown
        cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(0).click({ force: true });
        cy.contains('.el-select-dropdown__item', 'Coffee').click({ force: true });          
        
        // Click on the custom dropdown input to open the dropdown
        cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(1).click({ force: true });
        cy.contains('.el-select-dropdown__item', 'Prepare On Demand').click({ force: true });          

        // Fill out description field
        cy.get("#description").type("This is an example product.").should("have.value", "This is an example product.");


        //Billing
        // Fill out sale price field
        cy.get("#sale_price").type("50").should("have.value", "50");

        // Fill out purchase price field
        cy.get("#purchase_price").type("50").should("have.value", "50");
        
        // Select tax
        cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(2).click({ force: true });
        cy.contains('.el-select-dropdown__item', 'VAT (15%)').click();
        

        //Inventory
        // cy.get("#checkbox-returnable-1").check({ force: true });
        cy.get("#checkbox-track_inventory-1").check({ force: true });

        cy.get("#sku").type("123321").should("have.value", "123321")
        cy.get("#barcode").type("123321").should("have.value", "123321")
        
        cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(3).click({ force: true });
        cy.contains('.el-select-dropdown__item', 'Box').click({force: true});


        cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(4).click({ force: true });
        cy.contains('.el-select-dropdown__item', '111111').click();
        cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(5).click({ force: true });
        cy.contains('.el-select-dropdown__item', 'Al Hamra Branch').click({ force: true });

        cy.get('input[data-item="quantity"]').eq(0).type('30');

        
        // // Submit the form
        cy.get('#composite-item').submit()

        cy.wait(20000);

    });

    
    it("Edits Composite Item", () => {
        
        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/composite-items/composite-items/5/edit");

        // //General
        // // Select product type
        // cy.get("#type-product").check({ force: true });
        // // cy.get("#type-service").check({ force: true });

        // // Fill out name field
        // cy.get("#name").type("testProduct 1").should("have.value", "testProduct 1");
        
        // // Click on the custom dropdown input to open the dropdown
        // cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(0).click({ force: true });
        // cy.contains('.el-select-dropdown__item', 'Coffee').click({ force: true });          
        
        // // Click on the custom dropdown input to open the dropdown
        // cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(1).click({ force: true });
        // cy.contains('.el-select-dropdown__item', 'Prepare On Demand').click({ force: true });          

        // // Fill out description field
        // cy.get("#description").type("This is an example product.").should("have.value", "This is an example product.");


        // //Billing
        // // Fill out sale price field
        // cy.get("#sale_price").type("50").should("have.value", "50");

        // // Fill out purchase price field
        // cy.get("#purchase_price").type("50").should("have.value", "50");
        
        // // Select tax
        // cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(2).click({ force: true });
        // cy.contains('.el-select-dropdown__item', 'VAT (15%)').click();
        

        // //Inventory
        // // cy.get("#checkbox-returnable-1").check({ force: true });
        // cy.get("#checkbox-track_inventory-1").check({ force: true });

        // cy.get("#sku").type("123321").should("have.value", "123321")
        // cy.get("#barcode").type("123321").should("have.value", "123321")
        
        // cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(3).click({ force: true });
        // cy.contains('.el-select-dropdown__item', 'جرام').click({force: true});

        cy.contains('button', 'Add a Item').click();

        // cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(4).click({ force: true });
        // cy.contains('.el-select-dropdown__item', '111111').click();
        // cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(5).click({ force: true });
        // cy.contains('.el-select-dropdown__item', 'Al Hamra Branch').click();
        cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(6).click({ force: true });
        cy.contains('.el-select-dropdown__item', '500').click();
        cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(7).click({ force: true });
        cy.contains('.el-select-dropdown__item', 'Al Nasef  Branch').click({ force: true });

        // cy.get('input[data-item="quantity"]').eq(0).type('20');
        cy.get('input[data-item="quantity"]').eq(1).type('20');           
        
        
        // // Submit the form
        cy.get('#item').submit()

        cy.wait(20000);
        
    });
    
});

// After finishing the test, run the following command to run the test:
// npx cypress open