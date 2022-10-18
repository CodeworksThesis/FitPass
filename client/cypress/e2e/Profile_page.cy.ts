describe('User is able ot get to its Profile', () => {
  beforeEach(() => {
    // reset and seed the database prior to every test
    cy.exec('npm run db:reset && npm run db:seed', {failOnNonZeroExit: false})

  })

  it('successfully loads', () => {
    cy.visit('/')
  })
})

describe('Login Page ', () => {
  it('finds the content "FitPass"', () => {
    cy.visit('/')
    cy.contains('FitPass')
  })
  it('finds the content "Login" and redirects to the home Page', () => {
    cy.visit('/')
    cy.contains('Login')
    cy.contains('Sign Up')

    cy.contains('Login').click()

  })

  it('Home page containts the Menu Item with the LogOut Button',()=>{
    cy.get('#root > nav > nav > div > div:nth-child(1) > div:nth-child(2) > svg > path').click()
  })
  it('displays the Navigation Bar',()=>{
    cy.contains('Profile').click()
  })

  it('Profile Page Details has all the following',()=>{
    cy.contains('Favorites')
    cy.contains('Bookings')
    cy.contains('Stats')
    cy.contains('Settings')
  })

})
