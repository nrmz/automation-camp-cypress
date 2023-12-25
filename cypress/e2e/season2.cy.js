describe('session2', () => {
    // it('test1', function () {
    //     cy.visit("https://play2.automationcamp.ir/");
    //     cy.get('#fname').type('Mohammad2');
    // });
    // it("scroll_check", () => {
    //     cy.visit("https://datatables.net/examples/basic_init/scroll_x.html");
    //     cy.get("cy.get(':nth-child(8) > :nth-child(9)')");
    // });

    // it("children", () => {
    //     cy.visit("https://play2.automationcamp.ir/");
    //     cy.contains('This is your form title:');
    //     cy.contains("label[for='moption']", "Option 2");
    //     cy.get("label[for='moption']").contains("Option 2");
    // });

    // it("children", () => {
    //     cy.visit("https://play2.automationcamp.ir/");
    //     cy.get('#owc').children();
    //     cy.get('#owc').children("[value='option 2']").click();
    //     cy.contains("Singer").parent();
    //     cy.get('#owc').children("[value='option 2']").siblings().should('have.length', 2);
    // });
    // it("ancestors", () => {
    //     cy.visit("https://en.wikipedia.org/wiki/Main_Page");
    //     cy.get('div#mp-welcome').parents();
    //     cy.get('div#mp-welcome').parents("div#mw-content-text");
    //     cy.get('div#mp-welcome').parentsUntil("#bodyContent");
    // });
    // it("descendants", () => {
    //     cy.visit("https://en.wikipedia.org/wiki/Main_Page")
    //     cy.get("#bodyContent").find("div#mw-content-text");
    //     cy.get("#bodyContent").within(() => {
    //         cy.get("div#mw-content-text")
    //     });
    // })
    // it("index", () => {
    //     cy.visit("https://play2.automationcamp.ir/")
    //     // cy.get("td").eq(5);
    //     // cy.get("td").first();
    //     // cy.get("td").last();
    //     cy.get("td").filter("#td_id");
    //     cy.get("td").not("#td_id");
    // })
    it("traversal", () => {
        cy.visit("https://play2.automationcamp.ir/")
        cy.get("[value='td1_value']").next();
        cy.get("[value='td1_value']").nextAll();
        cy.get("[value='td1_value']").nextUntil("[value='td4_value']");
        cy.get("[value='td5_value']").prev();
        cy.get("[value='td5_value']").prevAll();
        cy.get("[value='td5_value']").prevUntil("[value='td1_value']");
    })
})
