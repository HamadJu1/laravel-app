describe("Assets", () => {

    it("Created an Asset", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(15000);

        cy.visit(Cypress.env('baseUrl') + "/assets/assets/create");

        cy.get('#name').type('Asset 1').should('have.value', 'Asset 1')
        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(0).click();
        cy.contains('.el-select-dropdown__item', 'computer').click();
        
        cy.get('#serial_number').type('123456').should('have.value', '123456')
        cy.get('#description').type('this is an example asset.').should('have.value', 'this is an example asset.')
        
        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(1).click();
        cy.contains('.el-select-dropdown__item', 'BILL-00002').click();
        cy.get('.data-value-min > .relative > .datepicker').eq(0).click()
        cy.get('.flatpickr-day[aria-label="September 15, 2023"]').eq(0).click();
        cy.get('#useful_life').type('5 yers').should('have.value', '5 yers')
        
        cy.get('#salvage_value').type('3').should('have.value', '3')
        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(2).click();
        cy.contains('.el-select-dropdown__item', 'Declining Balance (Percentage)').click();
        cy.wait(5000)
        cy.get('#period').type('36').should('have.value', '36')
        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(3).click();
        cy.contains('.el-select-dropdown__item', 'Month').click();
        cy.get('#depreciation_percentage').type('70');
        cy.get('div[required="required"] > .relative > .datepicker').click()
        cy.get('.flatpickr-day[aria-label="September 30, 2023"]').eq(1).click();

        cy.get('#asset').submit();

        cy.wait(20000)

    })


    it("Edits an Asset", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/assets/assets/1/edit");

        // cy.get('#name').type('Asset 1').should('have.value', 'Asset 1')
        // cy.get('.el-input.el-input--prefix.el-input--suffix').eq(0).click();
        // cy.contains('.el-select-dropdown__item', 'computer').click();
        
        // cy.get('#serial_number').type('123456').should('have.value', '123456')
        // cy.get('#description').type('this is an example asset.').should('have.value', 'this is an example asset.')
        // cy.get('.data-value-min > .relative > .datepicker').eq(0).click()
        // cy.get('.flatpickr-day[aria-label="September 15, 2023"]').eq(0).click();
        // cy.get('#useful_life').type('5 yers').should('have.value', '5 yers')
        
        // cy.get('#salvage_value').type('3').should('have.value', '3 years')
        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(2).click();
        cy.contains('.el-select-dropdown__item', 'Straight Line').click();
        cy.wait(5000)
        cy.get('#period').type('36').should('have.value', '36')
        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(3).click();
        cy.contains('.el-select-dropdown__item', 'Month').click();
        cy.get('#depreciation_value').type('70');
        cy.get('div[required="required"] > .relative > .datepicker').click()
        cy.get('.flatpickr-day[aria-label="September 30, 2023"]').eq(1).click();

        cy.get('#asset').submit();

        cy.wait(20000)

    })

    
    it("Deletes vendors", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/assets/assets");

        // Check
        cy.get("#bulk-action-1").check({force: true});

        cy.wait(5000);

        cy.get('#button-bulk-action-delete').should('be.visible').click();

        cy.wait(5000);

        cy.get('button').contains('Cancel').should('be.visible').click();
        // cy.get('button').contains('Confirm').should('be.visible').click();

        cy.wait(20000);

    });

})