/// <reference types="cypress"/>
//Solution 1 avec Fixtures
describe("Suite de test - Création User", () => {
    before(() => {
        cy.visit("https://www.demoblaze.com/");
        cy.get("#signin2").click();
        cy.get("#sign-username").should("be.visible");
        cy.get("#sign-password").should("be.visible");
        cy.get(".btn-secondary").should("be.visible");
        cy.get(".btn-secondary").should("be.visible");
    });
    it("Scénario 1 création user", () => {
        cy.wait(500);
        cy.get("#sign-username").type("ms");
        cy.get("#sign-password").type("usernabil2");
        cy.get(
            "#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
        ).click();
    });
    it("Scénario 2 création user - User existant", () => {
        cy.wait(500);
        cy.get("#sign-username").type("xs");
        cy.get("#sign-password").type("usernabil1");
        cy.get(
            "#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
        ).click();
        cy.on("window:alert", (Text) => {
            expect(Text).contain("This user already exist.");
        });
        cy.on("window:confirm", () => true);
        cy.get(
            "#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary"
        ).click();
    });
});

// solution 2 avec Faker
/*const { faker } = require("@faker-js/faker");

let username = faker.name.firstName(); //username
let password = faker.internet.password(); //password
describe("Création user", () => {
    before(function() {
        cy.visit("https://www.demoblaze.com/");
        cy.get("#signin2").click();
        cy.get("#sign-username").should("be.visible");
        cy.get("#sign-password").should("be.visible");
        cy.get(
            "#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary"
        ).should("be.visible");
        cy.get(
            "#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary"
        ).should("be.visible");
    });
    it("Scénarion1 -création user", () => {
        cy.get("#sign-username").type(username);
        cy.get("#sign-password").type(password);
        cy.get(
            "#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary"
        ).click();
    });
});*/