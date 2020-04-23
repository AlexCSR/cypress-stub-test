it('should stub', () => {
  cy.visit('http://localhost:3000/')
    .then(win => {
      cy.stub(win.some, 'func').as('func')
    })
  cy.get('button').click()
  cy.get('@func').should('be.called')
});
