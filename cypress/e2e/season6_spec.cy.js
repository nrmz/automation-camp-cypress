describe('session 6', () => {

    it("1- Alerts - Alert", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.contains("Click for JS Alert").click();
        cy.on("window:alert", function(message) {
            expect (message).eq('I am a JS Alert')
        })
    })

    it("2-1 Alerts - Confirm - Accept", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.contains("Click for JS Confirm").click();
        cy.on("window:confirm", function(message) {
            expect (message).eq('I am a JS Confirm')
        })
        cy.get("#result").should('have.text', 'You clicked: Ok');
        cy.get("#result").invoke('text').should('equal', 'You clicked: Ok');
    })

    it.only("2-2 Alerts - Confirm - Dismiss", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.contains("Click for JS Confirm").click();
        cy.on("window:confirm", function(message) {
            expect (message).eq('I am a JS Confirm')
            return false
        })
        cy.get("#result").should('have.text', 'You clicked: Cancel');
        cy.get("#result").invoke('text').should('equal', 'You clicked: Cancel');
    })

    it("3- Alerts - Prompt", () => {

    })
})
