/// <reference types ="cypress" />

it('Google Search', function () {
    cy.visit("https://google.com");
    cy.get("input[name=q]").type("Cypress{enter}")
});
