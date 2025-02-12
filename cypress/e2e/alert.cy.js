describe('Handle JS Confirm dialog in Cypress', () => {
    it('Validates and interacts with the Confirm dialog', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
  
      cy.get('#name').type('Test Alert');
  
      // Intercept the alert and validate its content
      cy.on('window:confirm', (message) => {   //'window:confirm' is an event that listens for JavaScript confirm() dialogs triggered in the browser.
        // Validate the message content
        expect(message).to.contains('Hello Test Alert, Are you sure you want to confirm?');
  
        // Return true to simulate clicking "OK"
        return true;
      });
  
      // Click the Confirm button
      cy.get('#confirmbtn').click();
  
      cy.wait(2000);
    });
  });
  