describe("Variant", () => {
   
    it("Create Variant", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/inventory/variants/create");

        // Fill out name field
        cy.get("#name").type("variant 3").should("have.value", "variant 3");

        cy.get('#addItem').click();

        cy.get("#items\\[\\]\\[name\\]").eq(0).type("var1").should("have.value", "var1");
        cy.get("#items\\[\\]\\[name\\]").eq(1).type("var2").should("have.value", "var2");


        // Submit the form
        cy.get('#variant').submit()

        cy.wait(20000);

    });


    it("Edits Variant", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/inventory/variants/1/edit");

        // Fill out name field
        cy.get("#name").clear().type("variant 2").should("have.value", "variant 2");

        cy.get('#addItem').click();

        cy.get("#items\\[\\]\\[name\\]").eq(0).clear().type("Value 1").should("have.value", "Value 1");
        cy.get("#items\\[\\]\\[name\\]").eq(1).clear().type("Value 2").should("have.value", "Value 2");
        // cy.get("#items\\[\\]\\[name\\]").eq(2).clear().type("Value 3").should("have.value", "Value 3");
        // cy.get("#items\\[\\]\\[name\\]").eq(3).clear().type("Value 4").should("have.value", "Value 4");


        // Submit the form
        cy.get('#variant').submit()

        cy.wait(20000);

    });

    
    it("Deletes Variant", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/inventory/variants");

        //Choose
        cy.get("#bulk-action-3").check({force: true})
        
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