describe('home', () => {
  it('webapp deve estar online', () => {
    cy.visit(Cypress.env('baseURL'))

    cy.title().should('eq','Gerencie suas tarefas com Mark L')
  })
})