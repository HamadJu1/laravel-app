describe("Reports", () => {

    it("Filters report", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/common/reports");
        cy.contains('Journal Entries.').click();

        cy.get('input[placeholder="Hit enter to filter the results, or set a new filter"]').click();
        cy.get('Button').contains('Chart of Account').click();
        cy.get('Button').contains('drag_handle').click();
        cy.get('Button').contains('account 1').click();

        cy.wait(20000);

    })

})