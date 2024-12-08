describe("Sales Orders", () => {

    it("Creates Sales Orders", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/sales/sales-orders/create");

        // Find the button by its class and click it
        cy.get('button.w-full').eq(0).click();
        cy.get('span').contains('Walk-in Customer').click();


        // Click and choose a day from the expiry calender
        // cy.get('.data-value-min > .relative > .form-control').click();
        
        //choose an item
        cy.wait(2000);
        cy.contains('button', 'Add an Item').click();
        cy.contains('div', 'New Item').click();
        cy.wait(2000);
        cy.get('input[name="items.0.name"]').type('test');
        cy.wait(2000);
        cy.get('input[name="price"]').click().type('3000');
        cy.wait(2000);
        cy.contains('button', 'Add an Item').click();
        cy.wait(2000);
        cy.contains('span', 'Save').click();



        // cy.get('#select-item-button-13').click();
        // cy.contains('span', '11111').click();

        // cy.get('#document').submit();

        cy.wait(20000)

        cy.visit(Cypress.env('baseUrl') + "/sales/sales-orders");
        cy.wait(5000);
        cy.get('input[type="checkbox"][data-bulk-action]') // Select the checkbox with the data-bulk-action attribute
        .last()
        .invoke('attr', 'data-bulk-action') // Extract the value of the data-bulk-action attribute
        .then((orderId) => {
        cy.log(`Extracted Order ID: ${orderId}`); // Log the extracted ID
        Cypress.env('orderId', orderId); // Store the ID for later use
  });


    });


    it("Edits Sales Order", () => {

        const orderId = Cypress.env('orderId'); 

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(15000);
        
        cy.visit(`${Cypress.env('baseUrl')}/sales/sales-orders/${orderId}/edit`);
        cy.wait(5000);
        // cy.get('input.datepicker').eq(3).click();  // Click to open the datepicker
        // cy.wait(3000);  // Wait for the calendar to load
        // cy.get('.flatpickr-calendar', { timeout: 10000 }).should('be.visible');  // Ensure calendar is visible
        // cy.contains('.flatpickr-day', '30').click({ force: true });

        cy.wait(3000);
        cy.get('input[name="price"]') // Use the `name` attribute to target the input
        .click() // Click the input field
        .clear() // Clear the existing value
        .type('5000'); // Type the value "5000"

        cy.wait(2000);
        cy.contains('span', 'Save').click();



        // Find the button by its class and click it
        // cy.get('button.w-full').eq(0).click();
        // cy.contains('Walk-in Customer').click();

        // cy.get('.flatpickr-day[aria-label="September 27, 2023"]').eq(1).click({force: true});

        // // Click and choose a day from the expiry calender
        // // cy.get('.data-value-min > .relative > .form-control').click();
        
        // //choose an item
        // // cy.get('#select-item-button-13').click();
        // // cy.contains('span', 'G1 (val1)').click();

        // //choose an item
        // // cy.get('#select-item-button-30').click();
        // // cy.contains('span', 'product 1').click();

        // cy.get('input[name="items.0.quantity"]').clear().type('3');

        // cy.get('#document').submit();

        cy.wait(20000);

    });

    
    it("Deletes Sales Order", () => {

        const orderId = Cypress.env('orderId'); 
        
        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/sales/sales-orders");

        cy.get(`input#bulk-action-${orderId}`).click();
        cy.wait(3000);
        cy.contains('span', 'delete').click();
        cy.wait(5000);
        cy.contains('span', 'Confirm').click({ force: true });


        // Check
        // cy.get("#bulk-action-4050").check({force: true})
        
        // cy.wait(5000)

        // cy.get('#button-bulk-action-delete').should('be.visible').click();

        // cy.wait(5000)

        // // cy.get('button').contains('Cancel').should('be.visible').click();
        // cy.get('button').contains('Confirm').should('be.visible').click();

        cy.wait(10000);

    });
    
});