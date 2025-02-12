describe('Dropdown suggestion demo', () => {
  class DropdownTest {
    constructor(cy, country, typedInput) {
      this.cy = cy;
      this.country = country;
      this.typedInput = typedInput;
      this.inputField = '#autocomplete'; 
      this.dropdownOptions = '.ui-menu.ui-widget li'; 
    }

    selectCountryFromDropdown() {
      return cy
        .visit('https://rahulshettyacademy.com/AutomationPractice/') 
        .then(() => {
          // Clear the input field and type the partial text
          cy.get(this.inputField).clear().type(this.typedInput, { delay: 100 });

          // Wait for the dropdown options to appear and select the correct one
          cy.get(this.dropdownOptions)
            .should('be.visible')  
            .contains(new RegExp(`^${this.country}$`)) //Match the exact text
            .click();

          // Validate the selected value
          cy.get(this.inputField)
            .invoke('val') // Gets the current value of the input field.jQuery method
            .should('eq', this.country) //Asserts that the value (val) equals (eq) the expected country.Cypress assertion that checks if two values are equal.
            .then((selectedValue) => {
              cy.log(`Test passed! Selected country: ${selectedValue}`);
            });
        });
    }
  }

  it('should select countries correctly', () => {
    const dropdownTest1 = new DropdownTest(cy, 'Australia', 'aus');
    dropdownTest1.selectCountryFromDropdown();

    // Clear lingering state before the next test case
    cy.get('#autocomplete').clear();

    const dropdownTest2 = new DropdownTest(cy, 'India', 'ind');
    dropdownTest2.selectCountryFromDropdown();
  });
});

