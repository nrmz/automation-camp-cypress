describe('session5', () => {

    it("1- Checkbox/2-Radio Button / 3- Switch", () => {
            cy.visit("https://play1.automationcamp.ir/forms.html");
            cy.get("#check_java").should("not.be.checked");
            cy.get("#check_java").check({force: true});
            cy.wait(500);
            cy.get("#check_java").should("be.checked");
            cy.get("#check_java").uncheck({force: true}).should("not.be.checked");

            cy.visit("https://material.angular.io/components/slide-toggle/examples");
            cy.get("#mat-radio-2-input").check({force: true}).should("be.checked");

            cy.get("#mat-mdc-slide-toggle-8").check({force: true}).should("be.checked");
    })

        it("2-Radio Button / 3- Switch", () => {
                cy.visit("https://material.angular.io/components/slide-toggle/examples");
                cy.get("#mat-radio-2-input").check({force: true}).should("be.checked");

                cy.get("#mat-mdc-slide-toggle-8").check({force: true}).should("be.checked");
        })
        it("4- Multiple checkbox", () => {
                cy.visit("https://play1.automationcamp.ir/forms.html");
                cy.wait(500);
                cy.get("input[type=checkbox]").check(['PYTHON', 'JAVASCRIPT'])
        })
        it("5- Assert Enable/Disable", () => {
                cy.visit("https://material.angular.io/components/slide-toggle/examples");
                cy.get("#mat-mdc-slide-toggle-1-button").should('be.enabled')
                cy.get('#mat-mdc-checkbox-2-input').check({force: true});
                cy.get("#mat-mdc-slide-toggle-1-button").should('not.be.enabled')
        })

        it.only("6- Drop Down (Option Select)", () => {
            cy.visit("https://material.angular.io/components/select/examples");
            cy.get("#mat-input-0").select("mercedes", {force:true}).should('have.value', 'mercedes')

            cy.get('#mat-select-2').click();
            cy.get("#mat-option-6").click();
        })
    it("7- Drop Down (Chips)", () => {
        cy.visit("https://material.angular.io/components/chips/examples");
        cy.get("#mat-mdc-chip-list-input-2").click({force: true});
        cy.get("#mat-option-3").click();
        cy.get('#mat-chip-list-0').within(function() {
            cy.contains("Oranges");
        })
    })
})
