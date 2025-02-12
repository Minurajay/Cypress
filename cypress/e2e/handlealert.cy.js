describe('Handle JS Alerts in Cypress', () => {
    it('handling of baisc alert', () => {
      
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
  
    cy.get(':nth-child(1) > button').click();

    cy.on('window:alert', (alertText) => {

        expect(alertText).to.contains('I am a JS Alert')   //Can use different types of assertions
      })

      
    });
    it('handling of Confirm alert Ok', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

      
        cy.get(':nth-child(2) > button').click();
    
        cy.on('window:confirm', (acceptConfirm) => {
    
            expect(acceptConfirm).to.contains('I am a JS Confirm')
            return true; // Simulate clicking 'OK'
            
          })
          cy.get('#result').should('have.text', 'You clicked: Ok')
          
        });

        it('handling of Confirm alert Cancel', () => {
            cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    
          
            cy.get(':nth-child(2) > button').click();
        
            cy.on('window:confirm', () => {
            return false;  //// Simulate clicking 'Cancel'

            });
            cy.get('#result').should('have.text', 'You clicked: Cancel')

        });

        it('handling of Prompt', () => {
            cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        
            cy.window().then((PromptAlert) => {
                // Stub window.prompt
                cy.stub(PromptAlert, "prompt").returns("Testing prompt");
                cy.get(':nth-child(3) > button').click();
                cy.get("#result").contains('Testing prompt');
            });
        });
        
  });
  