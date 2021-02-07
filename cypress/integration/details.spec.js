/// <reference types="cypress" />

const firstRow = '.row:first-child'
const infoButton = 'button.btn-primary'

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3006')
  })

  it('should have Info button', () => {
    cy.get(`${firstRow} ${infoButton}`)
      .should('have.text', 'Info')
      .click()
  })

  it('Details modal should open and close', () => {
    cy.get(`${firstRow} ${infoButton}`)
      .click()
    cy.get('body').should('have.class', 'modal-open')
  })

})
