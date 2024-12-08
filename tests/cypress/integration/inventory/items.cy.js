// describe("Items", () => {
//     it("Create item and reuse SKU ID", () => {
//         // // Login
//         // cy.visit(Cypress.env('authUrl'));
//         // cy.get('#name_or_email').type(Cypress.env('email'));
//         // cy.get('#password').type(Cypress.env('password'));
//         // cy.get('#auth > .grid > .justify-center').click();
        
//         cy.visit(Cypress.env('authUrl'));
//         cy.wait(5000);
//         cy.get('input[name="username"]').click().type(Cypress.env('email')); 
//         cy.wait(2000);
//         cy.get('input[name="password"]').click().type(Cypress.env('password'));
//         cy.wait(2000);
//         cy.get('button[type="submit"]').contains('Login').click();
//         cy.wait(10000);

//         // Navigate to Inventory > Items
//         cy.visit(Cypress.env('baseUrl') + "/inventory/items");

//         // Click on "Add Product" button
//         cy.get('span').contains('Add Product').click();

//         // Fill in the English and Arabic Name
//         cy.get('input[placeholder="English Name"]').type('test');
//         cy.wait(2000);
//         cy.get('input[placeholder="Arabic Name"]').type('اختبار');
//         cy.wait(2000);

//         // Search and Select Category "ee"
//         cy.get('input[placeholder="Select Category"]').click({ force: true }); // Open the dropdown
//         cy.get('.el-select-dropdown__item').each(($el, index, $list) => {
//             if ($el.text().trim() === 'ee') {
//                 cy.wrap($el).click({ force: true }); // Select "ee" if found
//             }
//         });



        
//         // Extract and store SKU
//         const skuValue = '2'; // Replace with dynamic value if needed
//         cy.get('input[placeholder="SKU"]').type(skuValue).should('have.value', skuValue).then(() => {
//             // Store SKU in Cypress environment variable
//             Cypress.env('skuId', skuValue); 
//             cy.log(`Stored SKU ID: ${skuValue}`);
//         });

//         // Select Unit
//         cy.get('.el-select').eq(1).click({ force: true }); // Open unit dropdown
//         cy.contains('.el-select-dropdown__item', 'Dozen').click({ force: true });

//         // Submit the form
//         cy.get('button').contains('Save').click(); // Replace 'Save' with the actual button text if different

//         // Use SKU ID later in the test
//         cy.then(() => {
//             const savedSku = Cypress.env('skuId'); // Retrieve stored SKU
//             cy.log(`Using stored SKU ID later: ${savedSku}`);
//             // Perform further actions with the stored SKU
//             cy.visit(Cypress.env('baseUrl') + `/inventory/items?sku=${savedSku}`);
//         });
//     });

describe("Items", () => {
    it("Create item and reuse SKU ID", () => {
        // Test data for input values
        const testData = {
            englishName: 'test',
            arabicName: 'اختبار',
            category: 'ee',
            skuValue: '12345',
            unit: 'Dozen'
        };

        // Step 1: Login
        // Using dynamic selectors and environment variables for flexibility
        cy.visit(Cypress.env('authUrl'));
        cy.get('input[name="username"]')
            .type(Cypress.env('email')); // Fetching email from environment
        cy.get('input[name="password"]')
            .type(Cypress.env('password')); // Fetching password from environment
        cy.get('button[type="submit"]')
            .contains(/login/i) // Case-insensitive match for the Login button
            .click();

        // Step 2: Navigate to Items Page
        // Generalizing navigation using environment variables or UI interaction
        if (Cypress.env('itemsPagePath')) {
            // Preferred: Using pre-defined path
            cy.visit(`${Cypress.env('baseUrl')}${Cypress.env('itemsPagePath')}`);
        } else {
            // Fallback: Navigate using UI elements
            cy.get('nav').contains(/inventory/i).click();
            cy.get('a, button').contains(/items/i).click();
        }

        // Step 3: Add a New Product
        // Open Add Product modal or page
        cy.get('button, span').contains(/add product/i).click();

        // Fill out product details using generalized selectors
        cy.get('input[placeholder*="English Name"]').type(testData.englishName);
        cy.get('input[placeholder*="Arabic Name"]').type(testData.arabicName);

        // Select a category dynamically
        cy.get('input[placeholder*="Category"]').click({ force: true });
        cy.get('.el-select-dropdown__item')
            .contains(testData.category)
            .click();

        // Enter and store the SKU value
        cy.get('input[placeholder*="SKU"]')
            .type(testData.skuValue)
            .should('have.value', testData.skuValue)
            .then(() => {
                // Save SKU in environment for reuse
                Cypress.env('skuId', testData.skuValue);
            });

        // Select a unit
        cy.get('.el-select')
            .eq(1) // Assuming the second dropdown is for unit
            .click({ force: true });
        cy.contains('.el-select-dropdown__item', testData.unit).click();

        // Submit the form
        cy.get('button')
            .contains(/save/i) // Case-insensitive match for Save button
            .click();

        // Step 4: Verify SKU Reuse
        // Dynamically validate SKU in subsequent actions
        cy.then(() => {
            const savedSku = Cypress.env('skuId');
            cy.log(`Using stored SKU ID later: ${savedSku}`);
            if (Cypress.env('skuSearchPath')) {
                cy.visit(`${Cypress.env('baseUrl')}${Cypress.env('skuSearchPath')}?sku=${savedSku}`);
            } else {
                // Fallback: UI-based search or validation logic
                cy.get('input[placeholder*="Search"]').type(savedSku);
                cy.get('button').contains(/search/i).click();
            }
        });
    });
});


    it("Deletes Item Using SKU ID", () => {
        // Retrieve the stored SKU ID
        const skuId = Cypress.env('skuId');
        if (!skuId) throw new Error('SKU ID is not set in Cypress environment.');
    
        // Login
        cy.visit(Cypress.env('authUrl'));
        cy.get('#name_or_email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#auth > .grid > .justify-center').click();
        cy.wait(10000);
    
        // Navigate to the items page
        cy.visit(Cypress.env('baseUrl') + "/inventory/items");
    
        // Wait for the table or list of items to load
        cy.get('table').should('be.visible');
    
        // Locate the row containing the SKU ID and click the associated checkbox
        cy.contains('tr', skuId).should('exist').within(() => {
            cy.get('input[type="checkbox"]').click({ force: true });
        });
    
        cy.contains('tr', skuId).should('exist').within(() => {
    cy.get('i.icon-delete').click({ force: true });

  });
  cy.contains('span', 'Confirm').click({ force: true });

});
