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

  it('Home page containts the Menu Item with Favorites ',()=>{
    cy.get('#root > nav > nav > div > div:nth-child(1) > div:nth-child(2) > svg > path').click()
  })
  it('displays the Navigation Bar',()=>{
    cy.contains('Favorites').click()
  })

  it('should display the faovrited classes and bring you to the details page if clicked', ()=>{
    cy.get("[data-testid='gymClassItem-Image']").first().click()
    cy.contains('BACK')
    cy.contains('RESERVE')
  })
  it('should take you back to the Home page if the back button is clicked', ()=>{
    cy.contains('BACK').click()
  })
  it('should log you out if the user logs out',()=>{

    cy.contains('Logout').click()
  })


})