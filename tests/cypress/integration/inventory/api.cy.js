describe("Create a product", () => {
    
    before(() => {
        cy.login();
    });

    it("Sends a POST request with the payload", () => {
        cy.csrfToken().then((token) => {
            return cy.request({
                method: "POST",
                url: Cypress.env('baseUrl') + "/inventory/items",
                _token: token,
                body: {
                    type: "product",
                    name: "Prdouct name",
                    sale_information: true,
                    purchase_information: true,
                    sale_price: "",
                    purchase_price: "",
                    returnable: true,
                    track_inventory: "",
                    add_variants: "",
                    sku: "123456",
                    barcode: "123456",
                    items: [
                        {
                            default_warehouse: true,
                            opening_stock: 0,
                            reorder_level: 0,
                            name: 0,
                            variant_value_id: 0,
                            sku: 0,
                            barcode: 0,
                            sale_price: 0,
                            purchase_price: 0,
                        },
                    ],
                    item_backup: [
                        {
                            default_warehouse: "",
                            opening_stock: "",
                            reorder_level: "",
                            name: "",
                            variant_value_id: "",
                            sku: "",
                            barcode: "",
                            sale_price: "",
                            purchase_price: "",
                        },
                    ],
                    variants: [
                        {
                            variant_id: "",
                        },
                    ],
                    enabled: 1,
                    description: "",
                    category_id: "",
                    de_income_account_id: "",
                    de_expense_account_id: "",
                },
            }).then((response) => {
                // Add any assertions you need to validate the response
                expect(response.status).to.eq(200);
                
                // expect(response.body).to.have.property("id");
            });
        });
    });
});