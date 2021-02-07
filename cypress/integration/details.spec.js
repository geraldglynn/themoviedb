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
  })

  it('Details modal should open ', () => {
    cy.clickElement(`${firstRow} ${infoButton}`)
    cy.get('body').should('have.class', 'modal-open')
  })

  it('Details modal should close ', () => {
    cy.clickElement(`${firstRow} ${infoButton}`)
    cy.clickElement('button.close')
    cy.get('body')
      .should('not.have.class', 'modal-open')
  })

})
