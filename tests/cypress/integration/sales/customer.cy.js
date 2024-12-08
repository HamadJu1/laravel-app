describe("Customers", () => {

    it("Creates Customer", () => {

        const randomEmailSuffix = Math.floor(100 + Math.random() * 900); // Random number between 100 and 999
        const uniqueEmail = `test${randomEmailSuffix}@mail.com`;

        const randomPhoneSuffix = Math.floor(1000000 + Math.random() * 9000000); // Random number between 1000000 and 9999999
        const phoneNumber = `55${randomPhoneSuffix}`; 

        const randomTaxNumber = Math.floor(100000000000 + Math.random() * 900000000000);

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
         
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/sales/customers-add");

        cy.get('input[placeholder="English Name"]').click().type('test_hamad');
        cy.wait(2000);
        cy.get('input[placeholder="Eamil"]').click().type(uniqueEmail);
        cy.wait(2000);
        cy.get('input#customerPhone').click().type(phoneNumber);
        cy.wait(2000);
        cy.get('input[placeholder="Tax Number"]').click().type(randomTaxNumber);
        cy.wait(2000);
        cy.get('input[placeholder="Enter a place"]').click().type('alhamara riyadh saudi arabia{enter}');
        cy.wait(2000);
        cy.contains('button', 'Save').click();
        

        // cy.get('#en_GB').type('customer 1').should('have.value', 'customer 1');
        // cy.get('#email').type('mail@comp.com').should('have.value', 'mail@comp.com');
        // cy.get('#phone').type('09876543212').should('have.value', '09876543212');
        // cy.get('#website').type('comp.com').should('have.value', 'comp.com');
        
        // cy.get('#tax_number').type('123').should('have.value', '123');
        
        // cy.get('#address').type('4th street').should('have.value', '4th street');
        // cy.get('#city').type('Riyadh').should('have.value', 'Riyadh');
        // cy.get('#zip_code').type('10293').should('have.value', '10293');
        // cy.get('#state').type('Riyadh').should('have.value', 'Riyadh');
        // // Click on the custom dropdown input to open the dropdown
        // cy.get('.el-input.el-input--prefix.el-input--suffix').eq(1).click();
        // cy.contains('.el-select-dropdown__item', 'Saudi Arabia').click();

        // cy.get('#contact').submit();

        cy.wait(10000);
        cy.visit(Cypress.env('baseUrl') + "/sales/customers");
        cy.wait(10000);
        // Select all elements containing "test_hamad"
        // Target the last row in the list or table
        cy.get('div.cell-div.text-schemePrimary-blue.cursor-pointer') // Select all rows
        .last() 
        .should('contain.text', 'test_hamad')
        .click(); 


        cy.wait(5000);
        cy.url().then((url) => {
            cy.log(`Full URL: ${url}`); // Log the full URL to verify its structure
            
            // Ensure we are correctly splitting and isolating the ID
            const segments = url.split('/');
            cy.log(`URL Segments: ${segments}`); // Log all segments of the URL for debugging
            
            // Extract the segment after 'customers' and clean query parameters
            const customerIndex = segments.indexOf('customers'); // Find where "customers" is
            const customerId = customerIndex !== -1 ? segments[customerIndex + 1].split('?')[0] : null;
    
            if (customerId) {
                cy.log(`Customer ID: ${customerId}`);
                Cypress.env('customerId', customerId); // Store dynamically for future use
            } else {
                throw new Error("Customer ID could not be extracted from the URL");
            }
        });
    })

    it("Edits Customer", () => {

        const randomPhoneSuffix = Math.floor(1000000 + Math.random() * 9000000);
        const phoneNumber = `55${randomPhoneSuffix}`;
        
        const customerId = Cypress.env('customerId');
    
        cy.visit(Cypress.env('authUrl'));
    
        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        cy.wait(10000);
    
        cy.visit(`${Cypress.env('baseUrl')}/sales/customers/edit/${customerId}`);
        cy.wait(5000);
    
        cy.get('input#customerPhone')
            .should('be.visible')
            .clear()
            .type(phoneNumber);
        cy.wait(2000);
    
        cy.get('input[placeholder="Website"]')
            .should('be.visible')
            .clear()
            .type('company.com');
        cy.wait(2000);
    
        cy.contains('button', 'Save').click();
        cy.wait(20000);
    });
    
    
    
    it("Deletes Customer", () => {

        cy.visit(Cypress.env('authUrl'));

        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        
        cy.wait(10000);

        cy.visit(Cypress.env('baseUrl') + "/sales/customers");


        // cy.get('span.el-checkbox__inner')
        // .last() // Select the last checkbox
        // .click(); // Click the checkbox
        cy.get('.el-checkbox__inner').last().click();
    
        // Step 2: Ensure the checkbox is for the 'test_hamad' account
        cy.get('.el-checkbox__inner').last()
          .parents() // Find the parent element that contains the checkbox and account name
          .contains('test_hamad')
          .should('exist');       
        cy.wait(2000);
        cy.contains('button', 'Delete') // Find the button containing the text 'Delete'
        .click(); // Click the button


        //Check box
        //change the ID to the item you want to delete
        // cy.get("#bulk-action-398").check({force: true});
        
        // cy.wait(5000);

        // cy.get('#button-bulk-action-delete').should('be.visible').click();

        // cy.wait(5000);

        // // cy.get('button').contains('Cancel').should('be.visible').click();
        // cy.get('button').contains('Confirm').should('be.visible').click();

        cy.wait(10000);

    });

});