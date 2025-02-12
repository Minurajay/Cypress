describe('My First Cypress Test', () => {

  it('Assertions Demo', () => {
    // Visit the application
    cy.visit('https://kitchen.applitools.com/');

    // Assertions

    // Check if an element is present or not
    cy.get('.chakra-heading.css-dpmy2a').should('exist');
    cy.contains('The Kitchen').should('exist');
    cy.contains('The Kitchen12').should('not.exist');


    // Check if an element is visible or hidden
    cy.get('h1').should('be.visible');
    // cy.get('h1').should('not.be.visible'); 

    // Check if an element is enabled or disabled
    // cy.get('.chakra-heading.css-dpmy2a').should('be.enabled');
    // cy.get('.chakra-heading.css-dpmy2a').should('be.disabled'); 
    
    // Check element text
    cy.get('h1').should('have.text', 'The Kitchen');
    cy.get('h1').should('not.have.text', 'abc');

    // Check attribute value
    cy.get('h1').should('have.attr', 'class', 'chakra-heading css-dpmy2a');
    cy.get('h1').invoke('attr', 'class').should('match', /.*css-dpmy2a/);

    // Check the page URL
    cy.url().should('eq', 'https://kitchen.applitools.com/'); //eq ensures exact match.
    cy.url().should('include', 'kitchen');

    // Check the page title
    cy.title().should('include', 'Kitchen');

    // Visual validation with screenshot not an assertion
    cy.screenshot();
  });
});


//cy.get('selector').eq(index);
//.eq() method is used to select an element at a specific index from a set of elements.

//common assertions not in the code
// Length Assertions (e.g., .should('have.length', n))
// CSS Assertions (e.g., .should('have.css', 'property', 'value'))
// State Assertions (e.g., .should('be.checked'), .should('be.enabled'), .should('be.disabled'))
