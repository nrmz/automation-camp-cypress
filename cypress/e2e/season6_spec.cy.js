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

    it("2-2 Alerts - Confirm - Dismiss", () => {
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
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then(function($win){
            cy.contains("Click for JS Prompt").click();
            cy.stub($win, 'prompt').returns('AutomationCamp-cypress');
        })
        cy.get("#result").should('have.text', 'You entered: AutomationCamp-cypress');
        cy.get("#result").invoke('text').should('equal', 'You entered: AutomationCamp-cypress');
    })

    it.only("4- Alerts - Prompt", () => {
        cy.visit("https://material.angular.io/components/dialog/examples");
        cy.get('body > material-docs-app > app-cookie-popup > div > div > button > span.mdc-button__label');
        cy.get('body > material-docs-app > app-navbar > nav.docs-navbar-header > a:nth-child(3)').then(function(cdk) {
            cy.get('#dialog-data > div > div.docs-example-viewer-body.ng-star-inserted > dialog-data-example > button').click();
            cy.wait(1000);
            let rect = cdk[0].getBoundingClientRect()
            cy.document().then(function(doc) {
                doc.elementFromPoint(rect.x, rect.y).click();
            })
        })
    })
})
