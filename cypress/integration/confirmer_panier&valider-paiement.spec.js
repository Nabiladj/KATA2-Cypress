/// <reference types="cypress"/>
//const { faker } = require("@faker-js/faker");
const faker = require("@faker-js/faker/locale/fr");
let username = faker.name.firstName();

let city = faker.address.city();
let card = faker.finance.creditCardNumber();
let month = faker.date.month();

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
    it("Scénario 2 - Consulter le panier", () => {
        cy.get("#cartur").click();
        cy.get(".col-lg-1 > .btn").should("be.visible");
    });
    it("Scénario 3 - Saisir les informations et valider", () => {
        cy.get(".col-lg-1 > .btn").click();
        cy.wait(500);
        cy.get("#name").type(username);
        cy.get("#country").type("France");
        cy.get("#city").type(city);
        cy.get("#card").type(card);
        cy.get("#month").type(month);
        cy.get("#year").type("2022");
        cy.get(
            "#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
        ).click();
        cy.get(".lead").should("contain", "Name");
        cy.get(".confirm").click();
    });
});