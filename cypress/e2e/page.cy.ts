describe('Page UI E2E Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('should display defaults', () => {
    cy.get('#start_at').should('be.visible').and('have.value', '0')
    cy.get('#step').should('be.visible').and('have.value', '1')
    cy.get('.current_count').should('contain', '0')
  })

  it('should increment counter when button is clicked', () => {
    cy.get('.count_button').click()
    cy.get('.current_count').should('contain', '1')
  })

  it('should update the counter using custom values', () => {
    cy.get('#start_at').clear().type('7')
    cy.get('#step').clear().type('4')
    cy.get('body').click(0, 0)
    cy.get('.current_count').should('contain', '11')
  })

  it('should update the counter using negative start and custom step values', () => {
    cy.get('#start_at').clear().type('-7')
    cy.get('#step').clear().type('4')
    cy.get('body').click(0, 0)
    cy.get('.current_count').should('contain', '-3')
  })

  it('should update the counter using negative start and negative step values', () => {
    cy.get('#start_at').clear().type('-6')
    cy.get('#step').clear().type('-3')
    cy.get('body').click(0, 0)
    cy.get('.current_count').should('contain', '-9')
  })

  it('should not increment if the step is zero', () => {
    cy.get('#start_at').clear().type('10')
    cy.get('#step').clear().type('0')
    cy.get('.count_button').click()
    cy.get('.current_count').should('contain', '10')
  })

  it('should handle decimal start', () => {
    cy.get('#start_at').clear().type('2.5')
    cy.get('#step').clear().type('0')
    cy.get('body').click(0, 0)
    cy.get('.current_count').should('contain', '2.5')
  })

  it('should handle decimal steps', () => {
    cy.get('#start_at').clear().type('0')
    cy.get('#step').clear().type('3.5')
    cy.get('body').click(0, 0)
    cy.get('.current_count').should('contain', '3.5')
  })

  it('should handle negative decimal start', () => {
    cy.get('#start_at').clear().type('-4.5')
    cy.get('#step').clear().type('0')
    cy.get('body').click(0, 0)
    cy.get('.current_count').should('contain', '-4.5')
  })

  it('should handle negative decimal steps', () => {
    cy.get('#start_at').clear().type('0')
    cy.get('#step').clear().type('-5.5')
    cy.get('body').click(0, 0)
    cy.get('.current_count').should('contain', '-5.5')
  })
})
