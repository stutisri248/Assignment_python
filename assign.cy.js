///<reference types = "cypress" />
  const stepTo = ($el, target) => {
    const step = $el[0].getAttribute('step') || 1
    const current = $el[0].value
    const diff = target - current
    const steps = Math.abs(diff * step)
    if (diff > 0) {
      $el[0].stepUp(steps)
    }
    else {
      $el[0].stepDown(steps)
    }
  }
  
  it('Should assert the slider value correctly', function() {
    cy.visit("https://www.lambdatest.com/selenium-playground/");
        cy.get(':nth-child(13) > .text-black').click();
        cy.wait(5000);
        cy.scrollTo('top');
        cy.get('#slider3 > div.sp__range > .sp__range')
      .then($el => stepTo($el, 95) )  
      .trigger('change')
    cy.get('#rangeSuccess').should('have.value', 95)     // passes
})