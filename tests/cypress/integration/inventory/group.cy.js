describe("Group", () => {
    
    it("Create Group", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/inventory/item-groups/create");

        // Fill out name field
        cy.get("#name").type("Example group").should("have.value", "Example group");

        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(0).click();
        cy.contains('.el-select-dropdown__item', 'General').click();
        
        // Fill out description field
        cy.get("#description").type("This is an example group.").should("have.value", "This is an example group.");
        
        // Click on the dropdown input to open the dropdown
        cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(1).click({ force: true });
        cy.contains('.el-select-dropdown__item', 'VAT (15%)').click();
        
        
        // cy.get(".relative > .el-select > .el-select__tags > .el-select__input").click();
        // cy.get(".el-zoom-in-top-enter-active > .el-scrollbar > .el-select-dropdown__wrap > .el-scrollbar__view > :nth-child(1) > .float-left").click();
        
        // Select unit
        cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(2).click({ force: true });
        cy.contains('.el-select-dropdown__item', 'جرام').click();
        // cy.get("#unit").select("جرام", { force: true });
        
        // Select variant
        cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(3).click({ force: true });
        cy.contains('.el-select-dropdown__item', 'Amet.').click();
        
        cy.wait(10000)
        cy.get('.el-select__tags .el-select__input').should('be.visible').click({ multiple: true });
        cy.get('[style="min-width: 478.538px; position: absolute; top: 761px; left: 703px; transform-origin: center top; z-index: 2015;"] > .el-scrollbar > .el-select-dropdown__wrap > .el-scrollbar__view > :nth-child(1) > span').should('be.visible').click();

        
        // cy.get("#variant_ids").select("var1", { force: true });
        // cy.get("#values_ids").select("val1", { force: true });
        
        cy.get('input[name="items.0.sku"]').type("123456").should("have.value", "123456");
        cy.get('input[name="items.0.barcode"]').type("654321").should("have.value", "654321");
        cy.get('input[name="items.0.sale_price"]').type("9.99").should("have.value", "9.99");
        cy.get('input[name="items.0.purchase_price"]').type("9.99").should("have.value", "9.99");
        
        // // //
        cy.get("#tab-inventory").click();
        
        // //fill inventory
        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(4).click();
        cy.contains('.el-select-dropdown__item', 'Al Hamra Branch').click();
        // cy.get("#warehouse_ids").select("Main Warehouse", { force: true });
        cy.get('input[name="items.0.opening_stock"]').type("10").should("have.value", "10");
        cy.get('input[name="items.0.reorder_level"]').type("10").should("have.value", "10");
        
        
        // Submit the form
        cy.get('#item-group').submit()

        cy.wait(20000);

    });


    it("Edits Group", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/inventory/item-groups/4/edit");

        // Fill out name field
        cy.get("#name").clear().type("Gr1").should("have.value", "Gr1");

        // cy.get('.el-input.el-input--prefix.el-input--suffix').eq(0).click();

        // // Select an option
        // cy.contains('.el-select-dropdown__item', 'General').click();
        
        // Fill out description field
        // cy.get("#description").type("This is an example group.").should("have.value", "This is an example group.");
        
        // // Click on the dropdown input to open the dropdown
        // cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(1).click({ force: true });
        
        // // Wait for the dropdown to be visible
        // cy.get('.el-select-dropdown.el-popper').should('be.visible');
        
        // // Select from the dropdown
        // cy.contains('.el-select-dropdown__item', 'VAT (15%)').click();
        
        
        // cy.get(".relative > .el-select > .el-select__tags > .el-select__input").click();
        // cy.get(".el-zoom-in-top-enter-active > .el-scrollbar > .el-select-dropdown__wrap > .el-scrollbar__view > :nth-child(1) > .float-left").click();
        
        // Select unit
        cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(2).click({ force: true });
        cy.contains('.el-select-dropdown__item', 'درزن').click();
        // cy.get("#unit").select("جرام", { force: true });
        
        // // Select variant
        // cy.get('.el-select .el-input.el-input--prefix.el-input--suffix').eq(3).click({ force: true });
        
        // // Wait for the dropdown to be visible
        // cy.get('.el-select-dropdown.el-popper').should('be.visible');
        
        // // Select "VAT (15%)" from the dropdown
        // cy.contains('.el-select-dropdown__item', 'variant').click();
        
        // cy.wait(10000)
        // cy.get('.el-select__tags .el-select__input').should('be.visible').click({ multiple: true });
        // cy.get('[style="min-width: 478.538px; position: absolute; top: 761px; left: 703px; transform-origin: center top; z-index: 2015;"] > .el-scrollbar > .el-select-dropdown__wrap > .el-scrollbar__view > :nth-child(1) > span').should('be.visible').click();

        
        
        // // cy.get("#variant_ids").select("var1", { force: true });
        // // cy.get("#values_ids").select("val1", { force: true });
        
        // cy.get('input[name="items.0.sku"]').type("123456").should("have.value", "123456");
        // cy.get('input[name="items.0.barcode"]').type("654321").should("have.value", "654321");
        // cy.get('input[name="items.0.sale_price"]').type("9.99").should("have.value", "9.99");
        // cy.get('input[name="items.0.purchase_price"]').type("9.99").should("have.value", "9.99");
        
        // // // //
        // cy.get("#tab-inventory").click();
        
        // // //fill inventory
        // cy.get('.el-input.el-input--prefix.el-input--suffix').eq(4).click();

        // // Select an option
        // cy.contains('.el-select-dropdown__item', 'test count').click();
        // // cy.get("#warehouse_ids").select("Main Warehouse", { force: true });
        // cy.get('input[name="items.0.opening_stock"]').type("10").should("have.value", "10");
        // cy.get('input[name="items.0.reorder_level"]').type("10").should("have.value", "10");
        
        
        // Submit the form
        cy.get('#item-group').submit()

        cy.wait(20000);

    });


    it("Deletes Group", () => {
        
        cy.visit(Cypress.env('authUrl'));
        
        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/inventory/item-groups");

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