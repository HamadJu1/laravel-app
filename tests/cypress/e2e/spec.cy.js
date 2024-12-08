describe("Items", () => {
  it("Create item and reuse SKU ID", () => {
      // Login
      cy.visit(Cypress.env('authUrl'));
      cy.get('#name_or_email').type(Cypress.env('email'));
      cy.get('#password').type(Cypress.env('password'));
      cy.get('#auth > .grid > .justify-center').click();

      cy.wait(10000);

      // Navigate to Inventory > Items
      cy.visit(Cypress.env('baseUrl') + "/inventory/items");

      // Click on "Add Product" button
      cy.get('span').contains('Add Product').click();

      // Fill in the English and Arabic Name
      cy.get('input[placeholder="English Name"]').type('test');
      cy.wait(2000);
      cy.get('input[placeholder="Arabic Name"]').type('اختبار');
      cy.wait(2000);

      // Search and Select Category "ee"
      cy.get('input[placeholder="Select Category"]').click({ force: true }); // Open the dropdown
      cy.get('.el-select-dropdown__item').each(($el, index, $list) => {
          if ($el.text().trim() === 'ee') {
              cy.wrap($el).click({ force: true }); // Select "ee" if found
          }
      });



      
      // Extract and store SKU
      const skuValue = '2'; // Replace with dynamic value if needed
      cy.get('input[placeholder="SKU"]').type(skuValue).should('have.value', skuValue).then(() => {
          // Store SKU in Cypress environment variable
          Cypress.env('skuId', skuValue); 
          cy.log(`Stored SKU ID: ${skuValue}`);
      });

      // Select Unit
      cy.get('.el-select').eq(1).click({ force: true }); // Open unit dropdown
      cy.contains('.el-select-dropdown__item', 'Dozen').click({ force: true });

      // Submit the form
      cy.get('button').contains('Save').click(); // Replace 'Save' with the actual button text if different

      // Use SKU ID later in the test
      cy.then(() => {
          const savedSku = Cypress.env('skuId'); // Retrieve stored SKU
          cy.log(`Using stored SKU ID later: ${savedSku}`);
          // Perform further actions with the stored SKU
          cy.visit(Cypress.env('baseUrl') + `/inventory/items?sku=${savedSku}`);
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

});
