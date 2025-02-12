describe('Launch Application', () => {     //describe:- describing a test suite
    it('Launch the test application', () => {   //it(): This function defines an individual test within the suite.The string "Launch the test application" is the name of the specific test case
        cy.visit('http://www.bestbuy.com/') //cy is a global object that provides access to a variety of commands.
    })
  })
