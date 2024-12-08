describe("Accounts", () => {

    it("Create an Accounts", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));

        cy.get('#password').type(Cypress.env('password'));

        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/banking/accounts/create");

        // cy.get('#type-credit_card').check({force: true});

        cy.get('#en_GB').eq(0).type('account 1').should('have.value', 'account 1')
        cy.get('#number').type('0192837465').should('have.value', '0192837465')
        cy.get('input[name="opening_balance"]').type('10000000')
        
        cy.get('input#en_GB').eq(1).type('Bank1').should('have.value', 'Bank1')
        cy.get('#bank_phone').type('09876567890').should('have.value', '09876567890')
        cy.get('#bank_address').type('19th street').should('have.value', '19th street')
        
        cy.get('#account').submit();

        cy.wait(20000)

    })


    it("Edits an Account", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));

        cy.get('#password').type(Cypress.env('password'));

        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/banking/accounts/256/edit");

        cy.get('#type-credit_card').check({force: true});

        // cy.get('#en_GB').type('account 1').should('have.value', 'account 1');
        // cy.get('#number').type('0192837465').should('have.value', '0192837465')
        // cy.get('input[name="opening_balance"]').clear().type('100000');
        
        // cy.get('input#en_GB').eq(1).type('Bank1').should('have.value', 'Bank1')
        // cy.get('#bank_phone').type('09876567890').should('have.value', '09876567890')
        // cy.get('#bank_address').type('19th street').should('have.value', '19th street')
        
        cy.get('#account').submit();

        cy.wait(20000)

    })
    

    it("Deletes an Account", () => {
        
        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));

        cy.get('#password').type(Cypress.env('password'));

        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/banking/accounts");

        //select account
        cy.get("#bulk-action-256").check({force: true});
        
        cy.wait(5000)

        //click on the delete button
        cy.get('#button-bulk-action-delete').should('be.visible').click();

        cy.wait(5000)

        // cy.get('button').contains('Cancel').should('be.visible').click();
        cy.get('button').contains('Confirm').should('be.visible').click();

        cy.wait(20000);

    });
    
})