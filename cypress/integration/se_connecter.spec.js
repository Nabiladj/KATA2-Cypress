/// <reference types="cypress"/>
// Sans Fixtures
/*describe("Se connecter", () => {
    beforeEach(() => {
        cy.visit("https://www.demoblaze.com/");
        cy.get("#login2").click();
        cy.get("#loginusername").should("be.visible");
        cy.get("#loginpassword").should("be.visible");
        cy.get(
            "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
        ).should("be.visible");
        cy.get(
            "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary"
        ).should("be.visible");
    });
    it("Scénario 1 Username OK password OK", () => {
        cy.wait(500);
        cy.get("#loginusername").type("xs");
        cy.get("#loginpassword").type("nabil1");
        cy.get(
            "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
        ).click();
        cy.get("#nameofuser").should("be.visible");
    });
    it("Scénario 2 Username OK password KO", () => {
        cy.wait(500);
        cy.get("#loginusername").type("xs");
        cy.get("#loginpassword").type("nabil-1");
        cy.get(
            "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
        ).click();
        cy.on("window:alert", (Text) => {
            expect(Text).contain("Wrong password.");
        });
        cy.on("window:confirm", () => true);
        cy.get(
            "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary"
        ).click();
    });
    it("Scénario 3 Username KO password OK", () => {
        cy.wait(500);
        cy.get("#loginusername").type("xs1");
        cy.get("#loginpassword").type("nabil1");
        cy.get(
            "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
        ).click();
        cy.on("window:alert", (Text) => {
            expect(Text).contain("User does not exist.");
        });
        cy.on("window:confirm", () => true);
        cy.get(
            "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary"
        ).click();
    });
    it("Scénario 4 Username KO password KO", () => {
        cy.wait(500);
        cy.get("#loginusername").type("xs2");
        cy.get("#loginpassword").type("nabil-1");
        cy.get(
            "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
        ).click();
        cy.on("window:alert", (Text) => {
            expect(Text).contain("User does not exist.");
        });
        cy.on("window:confirm", () => true);
        cy.get(
            "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary"
        ).click();
    });
});*/

//avec fixtures asynchrone
/*describe("Se connecter", () => {
    beforeEach(() => {
        cy.visit("https://www.demoblaze.com/");
        cy.get("#login2").click();
        cy.get("#loginusername").should("be.visible");
        cy.get("#loginpassword").should("be.visible");
        cy.get(
            "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
        ).should("be.visible");
        cy.get(
            "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary"
        ).should("be.visible");
        cy.fixture("jdduser").as("users");
    });
    it("Scénario 1 Username OK password OK", () => {
        cy.wait(500);
        cy.get("@users").then((users) => {
            const user = users[0];
            cy.get("#loginusername").type(user.username);
            cy.get("#loginpassword").type(user.password);
            cy.get(
                "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
            ).click();
        });

        cy.get("#nameofuser").should("be.visible");
        cy.url().should("to.include", ".demoblaze");
    });
    it("Scénario 2 Username OK password KO", () => {
        cy.wait(500);
        cy.get("@users").then((users) => {
            const user = users[1];
            cy.get("#loginusername").type(user.username);
            cy.get("#loginpassword").type(user.password);
            cy.get(
                "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
            ).click();
        });
        cy.on("window:alert", (Text) => {
            expect(Text).contain("Wrong password.");
        });
        cy.on("window:confirm", () => true);
        cy.get(
            "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary"
        ).click();
    });
    it("Scénario 3 Username KO password OK", () => {
        cy.wait(500);
        cy.get("@users").then((users) => {
            const user = users[2];
            cy.get("#loginusername").type(user.username);
            cy.get("#loginpassword").type(user.password);
            cy.get(
                "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
            ).click();
        });
        cy.on("window:alert", (Text) => {
            expect(Text).contain("User does not exist.");
        });
        cy.on("window:confirm", () => true);
        cy.get(
            "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary"
        ).click();
    });
    it("Scénario 4 Username KO password KO", () => {
        cy.wait(500);
        cy.get("@users").then((users) => {
            const user = users[3];
            cy.get("#loginusername").type(user.username);
            cy.get("#loginpassword").type(user.password);
            cy.get(
                "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
            ).click();
        });
        cy.on("window:alert", (Text) => {
            expect(Text).contain("User does not exist.");
        });
        cy.on("window:confirm", () => true);
        cy.get(
            "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary"
        ).click();
    });
});*/

//avec fixtures asynchrone
/*describe("Se connecter", () => {
    beforeEach(() => {
        cy.visit("https://www.demoblaze.com/");
        cy.get("#login2").click();
        cy.get("#loginusername").should("be.visible");
        cy.get("#loginpassword").should("be.visible");
        cy.get(
            "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
        ).should("be.visible");
        cy.get(
            "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary"
        ).should("be.visible");
        cy.fixture("jdduser").as("users");
    });
    it("Scénario 1 Username OK password OK", function() {
        cy.wait(500);
        const user = this.users[0];
        cy.get("#loginusername").type(user.username);
        cy.get("#loginpassword").type(user.password);
        cy.get(
            "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
        ).click();

        cy.get("#nameofuser").should("be.visible");
        cy.url().should("to.include", ".demoblaze");
    });
    it("Scénario 2 Username OK password KO", function() {
        cy.wait(500);
        const user = this.users[1];
        cy.get("#loginusername").type(user.username);
        cy.get("#loginpassword").type(user.password);
        cy.get(
            "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
        ).click();

        cy.on("window:alert", (Text) => {
            expect(Text).contain("Wrong password.");
        });
        cy.on("window:confirm", () => true);
        cy.get(
            "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary"
        ).click();
    });
    it("Scénario 3 Username KO password OK", function() {
        cy.wait(500);
        const user = this.users[2];
        cy.get("#loginusername").type(user.username);
        cy.get("#loginpassword").type(user.password);
        cy.get(
            "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
        ).click();

        cy.on("window:alert", (Text) => {
            expect(Text).contain("User does not exist.");
        });
        cy.on("window:confirm", () => true);
        cy.get(
            "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary"
        ).click();
    });
    it("Scénario 4 Username KO password KO", function() {
        cy.wait(500);
        const user = this.users[3];
        cy.get("#loginusername").type(user.username);
        cy.get("#loginpassword").type(user.password);
        cy.get(
            "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
        ).click();

        cy.on("window:alert", (Text) => {
            expect(Text).contain("User does not exist.");
        });
        cy.on("window:confirm", () => true);
        cy.get(
            "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary"
        ).click();
    });
});*/

//avec import (synchrone)
import * as users from "../fixtures/jdduser.json";

describe("Suite de test - Se connecter", () => {
    beforeEach(() => {
        cy.visit("https://www.demoblaze.com/");
        cy.get("#login2").click();
        cy.get("#loginusername").should("be.visible");
        cy.get("#loginpassword").should("be.visible");
        cy.get(".btn-primary").should("be.visible");
        cy.get(".btn-secondary").should("be.visible");
    });
    it("Scénario 1 Username OK password OK", function() {
        const user = users[0];
        cy.wait(500);
        cy.get("#loginusername").type(user.username).should("have.value", username);
        cy.get("#loginpassword").type(user.password);
        cy.get("#logInModal").find(".btn-primary").click();

        cy.get("#nameofuser").should("be.visible");
        cy.url().should("to.include", ".demoblaze");
    });
    it("Scénario 2 Username OK password KO", function() {
        const user = users[1];
        cy.wait(500);
        cy.get("#loginusername").type(user.username).should("have.value", username);
        cy.get("#loginpassword").type(user.password);
        cy.get("#logInModal").find(".btn-primary").click();

        cy.on("window:alert", (Text) => {
            expect(Text).contain("Wrong password.");
        });
        cy.on("window:confirm", () => true);
        cy.get("#logInModal").find(".btn-secondary").click();
    });
    it("Scénario 3 Username KO password OK", function() {
        const user = users[2];
        cy.wait(500);
        cy.get("#loginusername").type(user.username).should("have.value", username);
        cy.get("#loginpassword").type(user.password);
        cy.get("#logInModal").find(".btn-primary").click();

        cy.on("window:alert", (Text) => {
            expect(Text).contain("User does not exist.");
        });
        cy.on("window:confirm", () => true);
        cy.get("#logInModal").find(".btn-secondary").click();
    });
    it("Scénario 4 Username KO password KO", function() {
        const user = users[3];
        cy.wait(500);
        cy.get("#loginusername").type(user.username).should("have.value", username);
        cy.get("#loginpassword").type(user.password);
        cy.get("#logInModal").find(".btn-primary").click();

        cy.on("window:alert", (Text) => {
            expect(Text).contain("User does not exist.");
        });
        cy.on("window:confirm", () => true);
        cy.get("#logInModal").find(".btn-secondary").click();
    });
});