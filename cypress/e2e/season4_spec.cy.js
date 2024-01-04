describe('session4', () => {
    // it("1- What is Async ?", () => {
    //     cy.visit("https://wikipedia.org");
    //     cy.get("#js-link-box-en").click();
    //     cy.url().should("contain", "Main_Page");
    //     cy.wait(3000);
    //     console.log('test is done');
    // });
    // it("2- What is Then ?", () => {
    //     cy.visit("https://wikipedia.org");
    //     cy.get("#js-link-box-en").click();
    //     cy.url().should("contain", "Main_Page");
    //     cy.wait(3000).then(() => {
    //         console.log('test is done');
    //     })
    // });
    // it("3- Assert text of field?", () => {
    //     cy.visit("https://play2.automationcamp.ir/index.html");
    //     cy.get("#fname").type("Cypress").then((el) => {
    //         let input_value =  el.val();
    //         expect(input_value).to.eq("Cypress")
    //     });
    // });
    // it("3- Assert text of field?", () => {
    //     cy.visit("https://api.spacexdata.com/v3/missions")
    //         .then((resp) => resp.json())
    //         .then((data) => {
    //             console.log(data);
    //         });
    // })

    // it("5- Random Number: CORRECT ", () => {
    //     const reloadAndCheck = () => {
    //         cy.get('#result').should('not.be.empty')
    //             .invoke('text').then(parseInt)
    //             .then((number) => {
    //                 if(number === 7){
    //                     cy.log('Number **7** Found')
    //                     return
    //                 }else{
    //                     cy.wait(200);
    //                     cy.reload()
    //                     reloadAndCheck()
    //                 }
    //             })
    //     }
    //     cy.visit("random_number.html")
    //     reloadAndCheck()
    // })


    it("6- Use for debugging", () => {
            cy.visit("https://play2.automationcamp.ir/index.html");
            cy.get("#fname").type("Cypress").then((el) => {
                let input_value =  el.val();
                expect(input_value).to.eq("Cypres")
            });
    })
})
