describe('first test', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io/commands/waiting')

    cy.get('.wait-input1').type('Wait 1000ms after typing')
    cy.wait(1000)
    cy.get('.wait-input2').type('Wait 1000ms after typing')
    cy.wait(1000)
    cy.get('.wait-input3').type('Wait 1000ms after typing')
    cy.wait(1000)

    //Listens for GET requests to URLs matching **/comments/* and assigns it the alias @getComment.
    cy.intercept('GET', '**/comments/*').as('getComment') //This is found in the network tab. Whole URL also works for this https://jsonplaceholder.cypress.io/comments/1
    //wild card is used because it will be easy to get data since we'll be having the QA environment and Dev environment

    // we have code that gets a comment when
    // the button is clicked in scripts.js
    cy.get('.network-btn').click()

    // Waits for the intercepted GET request to complete.Validates that the response status is either 200 (OK) or 304 (Not Modified).
    cy.wait('@getComment').its('response.statusCode').should('be.oneOf', [200, 304])
  })
})