describe("Employees", () => {

    it("Creates an Employee", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/employees/employees/create");

        cy.get('#name').type('employee 1').should('have.value', 'employee 1')
        cy.get('#email').type('employee@company.com').should('have.value', 'employee@company.com')
        // cy.get(':nth-child(3) > .gap-x-8 > div[required="required"] > .relative > .form-control').eq(0).click()
        // cy.get('.numInputWrapper input[type="number"]').eq(0).type('1998');
        // cy.get('.flatpickr-monthDropdown-month').contains('December').click({ force: true });
        // cy.get('.flatpickr-day[aria-label="December 15, 1998"]').click();
        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(0).click();
        cy.contains('.el-select-dropdown__item', 'Male').click();
        
        cy.get('#phone').type('09876543212').should('have.value', '09876543212')
        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(1).click();
        cy.contains('.el-select-dropdown__item', 'مندوب المبيعات').click();
        
        cy.get('#address').type('6th street').should('have.value', '6th street')
        cy.get('#city').type('Riyadh').should('have.value', 'Riyadh')
        cy.get('#zip_code').type('05040').should('have.value', '05040')
        cy.get('#state').type('Riyadh').should('have.value', 'Riyadh')
        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(2).click();
        cy.contains('.el-select-dropdown__item', 'Saudi Arabia').click();
        
        cy.get('div[data-v-368d3452] input[data-v-368d3452]').clear().type('500000');
        cy.get('#tax_number').type('123').should('have.value', '123')
        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(1).click();
        cy.get('#bank_account_number').type('0987667890').should('have.value', '0987667890')
        
        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(4).click();
        cy.contains('.el-select-dropdown__item', 'Aileen Avila').click();

        cy.get('#employee').submit();

        cy.wait(20000)

    })


    it("Edits an Employee", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/employees/employees/41/edit");

        // cy.get('#name').type('employee 1').should('have.value', 'employee 1')
        cy.get('#email').clear().type('employee1@company.com').should('have.value', 'employee1@company.com')
        // cy.get(':nth-child(3) > .gap-x-8 > div[required="required"] > .relative > .form-control').eq(0).click()
        // cy.get('.numInputWrapper input[type="number"]').eq(0).type('1998');
        // cy.get('.flatpickr-monthDropdown-month').contains('December').click({ force: true });
        // cy.get('.flatpickr-day[aria-label="December 15, 1998"]').click();
        // cy.get('.el-input.el-input--prefix.el-input--suffix').eq(0).click();
        // cy.contains('.el-select-dropdown__item', 'Male').click();
        
        // cy.get('#phone').type('09876543212').should('have.value', '09876543212')
        // cy.get('.el-input.el-input--prefix.el-input--suffix').eq(1).click();
        // cy.contains('.el-select-dropdown__item', 'مندوب المبيعات').click();
        
        // cy.get('#address').type('6th street').should('have.value', '6th street')
        // cy.get('#city').type('Riyadh').should('have.value', 'Riyadh')
        // cy.get('#zip_code').type('05040').should('have.value', '05040')
        // cy.get('#state').type('Riyadh').should('have.value', 'Riyadh')
        // cy.get('.el-input.el-input--prefix.el-input--suffix').eq(2).click();
        // cy.contains('.el-select-dropdown__item', 'Saudi Arabia').click();
        
        // cy.get('div[data-v-368d3452] input[data-v-368d3452]').clear().type('500000');
        // cy.get('#tax_number').type('123').should('have.value', '123')
        // cy.get('.flatpickr-day[aria-label="September 1, 1998"]').eq(1).click();
        // cy.get('.el-input.el-input--prefix.el-input--suffix').eq(1).click();
        // cy.get('#bank_account_number').type('0987667890').should('have.value', '0987667890')
        
        // cy.get('.el-input.el-input--prefix.el-input--suffix').eq(4).click();
        // cy.contains('.el-select-dropdown__item', 'N/A').click();

        cy.get('#employee').submit();

        cy.wait(20000)

    })


    it("Deletes an Employee", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/employees/employees");

        // Check
        cy.get("#bulk-action-41").check({force: true})
        
        cy.wait(5000)

        cy.get('#button-bulk-action-delete').should('be.visible').click();

        cy.wait(5000)

        // cy.get('button').contains('Cancel').should('be.visible').click();
        cy.get('button').contains('Confirm').should('be.visible').click();

        cy.wait(10000);

    });
    
})