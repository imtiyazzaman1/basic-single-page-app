describe('Homepage', function() {
  it('successfully loads', function() {
    cy.visit('/')
  });

  it('contains a clickable button', function() {
    cy.visit('/')
    cy.contains('a', 'Button')
  });

  it('loads names when button is clicked', function() {
    cy.visit('/')
    cy.contains('Button').click()
    cy.contains('h2', 'And the names are...')
  });
});
