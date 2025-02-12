describe('Dropdown suggestion demo in Cypress', () => {
  const country = 'Palestine'; 
  const typedInput = 'pal'; // Letters to type to trigger suggestions

  it('Select country from dropdown', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    
    cy.get('#autocomplete')
      .clear()
      .type(typedInput);

    cy.get('.ui-menu.ui-widget li')   //selects all <li> elements within the dropdown menu that has this class 
      .contains(new RegExp(`^${country}$`)) // Match the exact country name
      .click();

    // Validate that the correct value is selected
    cy.get('#autocomplete')
      .should('have.value', country); // Check if the input field contains the correct country
  });
});
