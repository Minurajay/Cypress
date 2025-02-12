describe('drop down demo', () => {
  it('Select an option from the drop down', () => {
    // Navigate to the URL
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    cy.get('#dropdown-class-example').select(1);

    cy.get('#dropdown-class-example').select('option3');  
  });
});
