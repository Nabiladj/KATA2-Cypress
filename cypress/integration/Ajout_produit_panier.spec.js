/// <reference types="cypress"/>
//Solution 1 avec Fixtures
describe("Suite de test - Ajouter un produit au panier", () => {
    before(() => {
        cy.visit("https://www.demoblaze.com/");
        cy.get("#login2").click();
        cy.get("#loginusername").should("be.visible");
        cy.get("#loginpassword").should("be.visible");
        cy.get(".btn-primary").should("be.visible");
        cy.get(".btn-secondary").should("be.visible");
    });
    it("Scénario 1 - Se connecter", () => {
        cy.wait(500);
        cy.get("#loginusername").type("nabil");
        cy.get("#loginpassword").type("nabil1");
        cy.get(
            "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
        ).click();
        cy.get("#nameofuser").should("be.visible");
    });
    it("Scénario 2 - Sélectionner un article", () => {
        cy.get(".hrefch").eq(0).click();
        cy.get(".price-container").should("contain", "$360");
        cy.get(".btn").should("be.visible");
    });

    it("Scénario 3 - Ajouter le produit au panier", () => {
        cy.get(".col-sm-12 > .btn").click();
        //Product added
        cy.on("window:alert", (Text) => {
            expect(Text).contain("Product added");
        });
        cy.on("window:confirm", () => true);
    });
});