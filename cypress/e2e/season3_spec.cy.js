describe('session3', () => {
    // it("1- Keyboard Actions > Type ", () => {
    //     cy.visit("https://www.google.com");
    //     cy.get("textarea[jsname=yZiJbe]").type("آموزش سایپرس");
    // });
    // it("2- Keyboard Actions > Type ", () => {
    //     cy.visit("https://www.google.com");
    //     cy.get("textarea[jsname=yZiJbe]").type("آموزش سایپرس").type("{backspace}").type("{home}").type("{del}");
    // });
    // it("3- Keyboard Actions > Type ", () => {
    //     cy.visit("https://www.google.com");
    //     cy.get("textarea[jsname=yZiJbe]").type("آموزش سایپرس").type("{backspace}{home}{del}");
    // });
    // it.only("4- Keyboard Actions > Combination ", () => {
    //     cy.visit("https://www.google.com");
    //     cy.get("textarea[jsname=yZiJbe]").type("Cypress").realPress(['Control', 'A']).
    //     realPress(['Control', 'X']).realPress(['Control','V']);
    // });
    // it("5- Keyboard Actions > Combination ", () => {
    //     cy.visit("https://www.google.com");
    //     cy.get("textarea[jsname=yZiJbe]").type("Cypress");
    //     cy.get('textarea[jsname=yZiJbe]').clear();
    //     cy.get("textarea[jsname=yZiJbe]").type("Cypress");
    //     cy.get('textarea[jsname=yZiJbe]').type("{selectall}{del}");
    // });
    // it("6- Keyboard Actions > Delay Options ", () => {
    //     cy.visit("https://www.google.com");
    //     cy.get("textarea[jsname=yZiJbe]").type("I'm typing slowly", {delay: 100});
    //     cy.get('textarea[jsname=yZiJbe]').clear();
    //     cy.get("textarea[jsname=yZiJbe]").type("I'm typing fast", {delay: 0});
    // });
    // it("6- Keyboard Actions > Repeat ", () => {
    //     cy.visit("https://www.google.com");
    //     cy.get("textarea[jsname=yZiJbe]").type("Cypress ".repeat(6));
    // });
})

describe('Session3 - Mouse Actions', function () {
    // it('Click / Double Click / Right click', function () {
    //     cy.visit("https://play2.automationcamp.ir/")
    //     cy.get("input#male").click().should('be.checked');
    //     // Double click
    //     cy.contains("Double-click me").dblclick();
    //     cy.contains("Your Sample Double Click worked!");
    //     // Right click
    //     // cy.get("body").rightclick("top");
    //     cy.get("body").rightclick({force:true});
    //     // cy.get('[href="contact.html"]').click({ctrlKey: true});
    // })

    // it('Mouse Hover 1', function () {
    //     cy.visit('test-hover.html');
    //     cy.get('#left11').should('not.be.visible');
    //     cy.get("#menu1").trigger('mouseover');
    //     cy.get('#left11').should('be.visible');
    //
    //     cy.get('#left21').should('not.be.visible');
    //     // cy.get("#menu2").trigger('mouseover');
    //     cy.get("#menu2").realHover();
    //     cy.get('#left21').should('be.visible');
    // })


    it('5-Long Press (Click and Hold)', function () {
        cy.visit("https://demos.telerik.com/kendo-ui/circular-gauge/index").wait(10000)
        // cy.get(".qual_x_svg_dash").click()
        // cy.get("#onetrust-accept-btn-handler").click()
        // cy.get("[role=button][title=Increase]").trigger('mousedown', {which: 1})
        cy.get("[role=button][title=Increase]").realMouseDown()
            .wait(10000)
            .realMouseUp()
        cy.get("[role=slider]").invoke("attr", 'aria-valuenow')
            .should('not.equal', '55')
    });

    // it('Drag And Drop', function () {
    //     cy.visit('https://selenium08.blogspot.com/2020/01/drag-drop.html');
    //     cy.get("#draggable").trigger('mousedown', {which: 1})
    //         .get("#droppable")
    //         .trigger('mousemove')
    //         .trigger('mouseup',{force: true});
    // })

    // it('Drag And Drop by offset', function () {
    //     cy.visit('https://selenium08.blogspot.com/2020/01/drag-drop.html');
    //     cy.get("#draggable").trigger('mousedown', {which: 1})
    //         .realMouseMove(300, 100)
    //         .realMouseUp()
    // })
});

// describe('Session3 - Scroll', function () {
//     // topLeft, top, topRight, left, center, right, bottomLeft, bottom, and bottomRight
//     it('1-Scroll Page - To Position', function () {
//         cy.visit("https://www.imdb.com/chart/top/")
//         cy.scrollTo('bottom')
//     });
//     it('2-Scroll Page - By Coordination', function () {
//         cy.visit("https://www.imdb.com/chart/top/")
//         cy.scrollTo(0, 1300)
//     });
//     it('3-Scroll Page - By Pixel', function () {
//         cy.visit("https://www.imdb.com/chart/top/")
//         cy.scrollTo('0px', '3000px')
//     });
//     it('4-Scroll Page - By Percentage', function () {
//         cy.visit("https://www.imdb.com/chart/top/")
//         cy.scrollTo('0%', '60%')
//     });
//     it('5-Scroll Element Into View', function () {
//         cy.visit("https://www.imdb.com/chart/top/")
//         cy.get(':nth-child(245) > .titleColumn').scrollIntoView()
//     });
//     it('6-Scroll Element - To Position', function () {
//         cy.visit("https://datatables.net/examples/basic_init/scroll_xy.html")
//         cy.scrollTo("100%", "10%")
//         cy.get(".dataTables_scrollBody").scrollTo('right')
//
//     });
//     it('7-Scroll Element - By Coordination', function () {
//         cy.visit("https://datatables.net/examples/basic_init/scroll_xy.html")
//         cy.scrollTo("100%", "10%")
//         cy.get(".dataTables_scrollBody").scrollTo(300, 400)
//     });
//     it('8-Scroll Element - By Percentage', function () {
//         cy.visit("https://datatables.net/examples/basic_init/scroll_xy.html")
//         cy.scrollTo("100%", "10%")
//         cy.get(".dataTables_scrollBody").scrollTo('50%', '50%')
//     });
//     it('9-Scroll with Duration', function () {
//         cy.visit("https://datatables.net/examples/basic_init/scroll_xy.html")
//         cy.scrollTo("100%", "10%")
//         cy.get(".dataTables_scrollBody").scrollTo('center', {duration: "2000"})
//     });
//     it('10-Scroll with Line Easing', function () {
//         cy.visit("https://datatables.net/examples/basic_init/scroll_y.html")
//         cy.scrollTo("100%", "10%")
//         cy.wait(500)
//         // cy.get(".dataTables_scrollBody").scrollTo('center', {duration:500, easing: 'swing' })
//         cy.get(".dataTables_scrollBody").scrollTo('center', {duration: 500, easing: 'linear'})
//     });
// });
