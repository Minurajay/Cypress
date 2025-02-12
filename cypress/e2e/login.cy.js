describe('SauceDemo Login Test', () => {
    it('should log in with valid credentials', () => {
      // Visit the SauceDemo website
      cy.visit('https://www.saucedemo.com/');
  
      // Enter username
      cy.get('input[data-test="username"]').type('standard_user');
  
      // Enter password
      cy.get('input[data-test="password"]').type('secret_sauce');
  
      // Click the login button
      // cy.get('input[data-test="login-button"]').click();
      cy.xpath('//*[@id="login-button"]').click();
  
      // Verify successful login by checking the presence of the product page title
      cy.get('.title').should('have.text', 'Products');       //Assertion
    });
  });
  