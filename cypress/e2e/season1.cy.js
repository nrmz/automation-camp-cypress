/// <reference types ="cypress" />

// it('Google Search', function () {
//     cy.visit("https://google.com");
//     cy.get("input[name=q]").type("Cypress{enter}")
// });
//
// it('2- Cypress Website', function () {
//     cy.visit("https://cypress.io");
//     cy.title().should('eq', 'JavaScript Component Testing and E2E Testing Framework | Cypress')
//     cy.title().should('include', 'E2E Testing Framework | Cypress')
// });

describe('Suit 1', () => {
it('Google Search', function () {
    cy.visit("https://google.com");
    cy.get("input[name=q]").type("Cypress{enter}")
});

it('2- Cypress Website', function () {
    cy.visit("https://cypress.io");
    cy.title().should('eq', 'JavaScript Component Testing and E2E Testing Framework | Cypress')
    cy.title().should('include', 'E2E Testing Framework | Cypress')
});
})
