describe('Login Verify', () => {
  it('Success Login', () => {
    cy.visit('https://seller-center-dev.titipaja.id/login')
    cy.get('[type="email"]').type('developer@titipaja.id')
    cy.get('[type="password"]').type('123456')
    cy.get('.v-btn__content').click()
  })
  it('Failed Login-InactiveUser', () => {
    cy.visit('https://seller-center-dev.titipaja.id/login')
    cy.get('[type="email"]').type('salsabilla.salsabilla@coldspace.id')
    cy.get('[type="password"]').type('123456')
    cy.get('.v-btn__content').click()
  })
  it('Failed Login-InvalidPassword', () => {
    cy.visit('https://seller-center-dev.titipaja.id/login')
    cy.get('[type="email"]').type('salsabilla.salsabilla@coldspace.id')
    cy.get('[type="password"]').type('123')
    cy.get('.v-btn__content').click()
  })
})