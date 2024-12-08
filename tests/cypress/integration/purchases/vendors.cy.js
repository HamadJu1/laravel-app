describe("Vendors", () => {

    it("Creates Vendor", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/purchases/vendors/create");

        cy.get('#en_GB').type('Vendor 1').should('have.value', 'Vendor 1');
        cy.get('#email').type('mailven@comp.com').should('have.value', 'mailven@comp.com');
        cy.get('#phone').type('09876543212').should('have.value', '09876543212');
        cy.get('#website').type('vencomp.com').should('have.value', 'vencomp.com');
        
        cy.get('#tax_number').type('123').should('have.value', '123');
        
        cy.get('#address').type('6th street').should('have.value', '6th street');
        cy.get('#city').type('Riyadh').should('have.value', 'Riyadh');
        cy.get('#zip_code').type('1023').should('have.value', '1023');
        cy.get('#state').type('Riyadh').should('have.value', 'Riyadh');
        // Click on the custom dropdown input to open the dropdown
        cy.get('.el-input.el-input--prefix.el-input--suffix').eq(1).click();
        cy.contains('.el-select-dropdown__item', 'Saudi Arabia').click();

        cy.get('#contact').submit();

        cy.wait(20000);

    });

    it("Edits Vendor", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/purchases/vendors/399/edit");

        // cy.get('#en_GB').type('customer 1').should('have.value', 'customer 1')
        // cy.get('#name_or_email').type('mail@comp.com').should('have.value', 'mail@comp.com')
        // cy.get('#phone').type('09876543212').should('have.value', '09876543212')
        cy.get('#website').clear().type('vencompany.com').should('have.value', 'vencompany.com');
        
        // cy.get('#tax_number').type('123').should('have.value', '123')
        
        cy.get('#address').clear().type('16th street').should('have.value', '16th street');
        // cy.get('#city').type('Riyadh').should('have.value', 'Riyadh')
        // cy.get('#zip_code').type('10293').should('have.value', '10293')
        // cy.get('#state').type('Riyadh').should('have.value', 'Riyadh')

        cy.get('#contact').submit();

        cy.wait(20000);

    })
    

    it("Deletes Vendor", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/purchases/vendors");

        // Check
        cy.get("#bulk-action-399").check({force: true});

        
        cy.wait(5000);

        cy.get('#button-bulk-action-delete').should('be.visible').click();

        cy.wait(5000);

        // cy.get('button').contains('Cancel').should('be.visible').click();
        cy.get('button').contains('Confirm').should('be.visible').click();

        cy.wait(10000);

    });
    
});