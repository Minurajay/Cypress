describe('Drop Down Demo', () => {
  it('Select an option from the autocomplete drop down', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    cy.get('#autocomplete').click().clear().type('United', { delay: 200 });

    // Targets all list items (li) inside the dropdown using the selector .ui-menu.ui-widget li div:last-child.
    cy.get('.ui-menu.ui-widget li div:last-child').each(($el, index, $list) => {  // Iterates through each element with each 
      cy.log($el.text())                                                        //logs its text content.
      if($el.text() === 'United States (USA)'){ // Compares the text of each element to the desired value (United States (USA)).
        cy.wrap($el).click() //wrapping this element so that cypress commands can be used.
      }
    })

    // Validate that 'United States (USA)' is selected in the text box
    cy.get('#autocomplete').should('have.value', 'United States (USA)');
  });
});



// $el:-wrapped jQuery element.allowing to use jQuery methods (e.g., $el.text()) to interact with it.Represents the current element in the list during each iteration.
//index:-Represents the current index of the element in the list (starts from 0).Example: If you want to click the third element in the list: if (index === 2) { // 0-based index
//$list:Represents the entire collection of elements being iterated over.