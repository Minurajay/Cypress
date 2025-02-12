describe('Checkbox Test', () => {
  it('checks the checkbox if it is unchecked', () => {
    // Visit the page containing the checkbox
    cy.visit('http://your-website-url.com');

    // Get the checkbox element
    cy.get('#checkbox-id').then(($checkbox) => {
      // Check if the checkbox is already checked
      if (!$checkbox.is(':checked')) {     //:checked is a jQuery pseudo-class selector used to determine whether a checkbox, radio button, or an option in a <select> element is selected (checked). 
        // If unchecked, check it
        cy.wrap($checkbox).check();    
        cy.log('Checkbox is now checked.');
      } else {
        cy.log('Checkbox was already checked.');
      }
    });
  });
});

//More easy way.
// cy.get('#checkbox-id').should('not.be.checked').check();
