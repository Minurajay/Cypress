describe('Ascentic website', () => {
    it('should log any accessibility failures', () => {
      cy.visit('https://www.ascentic.lk/en/');
      cy.injectAxe();
      cy.checkA11y();
    });
  });