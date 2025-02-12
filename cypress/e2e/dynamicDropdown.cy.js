describe('Drop Down Demo', () => {
  it('Select an option from the autocomplete drop down', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    cy.get('#autocomplete').click().clear().type('United', { delay: 200 }); //sequentially typing happens with the use of delay.

    // Select the option 'United States (USA)' from the suggestions
    cy.get('.ui-menu-item-wrapper').contains('United States (USA)').click(); // Using a CSS selector to locate all elements with this class.

    // Validate that 'United States (USA)' is selected in the text box
    cy.get('#autocomplete').should('have.value', 'United States (USA)');
  });
});

