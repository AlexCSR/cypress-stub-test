import some from '../../src/some';

it('should stub', () => {
  const stubbed = cy.stub(some, 'func', () => {
    alert('stub called');
  });
  cy.visit('http://localhost:3000/');
  cy.get('button').click().then(() => {
    expect(stubbed).to.be.called;
  });
});
