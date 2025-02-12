describe('Radio and Checkboxes Demo', () => {
  it('Should select the Java radio button', () => {
    // Visit the page
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    
    // Select the radio button by its ID and click it
    selectRadioButtonByValue('radio1');
    
    // Optional wait time (not necessary in most cases in Cypress)
    cy.wait(1000);
  });
  
  // Method to select a radio button by its ID
  function selectRadioButtonByValue(radioButtonValue) {
    cy.get(`input[value='${radioButtonValue}']`).click();
  }
});
