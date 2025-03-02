///<reference types = "cypress" />
describe ("drag", () => {
    context('samsung-note9 resolution', () => {
      beforeEach(() => {
       cy.viewport('samsung-note9');
      })
    it("verify drag_drop", () =>{
        cy.visit("https://www.lambdatest.com/selenium-playground");
        cy.get(':nth-child(20) > .text-black').click();
        cy.wait(5000);
        cy.scrollTo('top');
        cy.injectAxe();
        cy.checkA11y('#name');
        cy.checkA11y('#inputEmail4');
        cy.checkA11y('#inputPassword4');
        cy.checkA11y('#company');
        cy.checkA11y('#websitename');
        cy.checkA11y('#inputCity');
        cy.checkA11y('#inputAddress1');
        cy.checkA11y('#inputAddress2');
        cy.checkA11y('#inputState');
        cy.checkA11y('#inputZip');
        cy.get('#name').type("stuti");
        cy.get('#inputEmail4').type("stutisri248@gmail.com");
        cy.get('#inputPassword4').type("2807");
        cy.get('#company').type("HCL");
        cy.get('#websitename').type("www.google.com");
        cy.get(':nth-child(3) > .pr-20 > .w-full').select("India");
        cy.get('#inputCity').type("varanasi");
        cy.get('#inputAddress1').type("GT ROAD MAHESPUR");
        cy.get('#inputAddress2').type("LAHARTARA");
        cy.get('#inputState').type("UP");
        cy.get('#inputZip').type("221002");
        cy.get('.bg-lambda-900').click();
        cy.get('.success-msg').should('have.text',"Thanks for contacting us, we will get back to you shortly.")
        cy.lighthouse();
       cy.invoke("removeAttr","target");
    });
});
})
