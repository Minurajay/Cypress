describe('radio button demo', () => {
  it('Interacts with a radio button using CSS selector', () => {
    // Navigate to the URL
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // cy.get('#radio-btn-example > fieldset > label:nth-child(2) > input').check(); //click() is also correct but check() is mostly used
    
    // cy.get('[type="radio"]').first().check();

    cy.get('[type="radio"]').check(['radio3','radio2']);

  });
});
