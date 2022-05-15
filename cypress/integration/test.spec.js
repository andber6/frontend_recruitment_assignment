/// <reference types="cypress" />

describe('check application is running', () => {
  it('visit localhost8080', () => {
    cy.visit('localhost:8080')
  })

  it('check input fields are present', () => {
    cy.get('#NameId'),
    cy.get('#EmailId')
  })

  it('fill and check name field for data', () => {
    cy.get('#NameId')
      .type('André Bergan')
      .should('have.value', 'André Bergan')
  })

  it('fill and check email field for data', () => {
    cy.get('#EmailId')
      .type('andre.bergan99@hotmail.com')
      .should('have.value', 'andre.bergan99@hotmail.com')
  })

  it('find and click submit button', () => {
    cy.get('#addUserButton').click()
  })

  it('find and test delete user button', () => {
    cy.get('#deleteUserButton').click()
  })

  it('check that there are no users in list by looking for delete button', () => {
    cy.get('#deleteUserButton').should('not.exist')
  })


})
