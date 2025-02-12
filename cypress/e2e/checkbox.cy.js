describe('check box demo', () => {
  it('Interacts with a checkbox using CSS selector', () => {
    // Navigate to the URL
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // cy.get('#checkBoxOption1').check(); //click() is also correct but check() is mostly used
    //check all the checkboxes
    // cy.get('[type="checkbox"]').check();
    
    // cy.get('[type="checkbox"]').first().check();

    cy.get('[type="checkbox"]').check('option3');

  });
});
