describe('User is able ot get to its Bookings and Logout', () => {
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

  it('Profile Page has a Bookings button that redirects you to the Bookings page',()=>{
    cy.contains('Bookings').click({force:true})
  })
  it('should display the Booked classes the page should have the following', ()=>{
    // cy.get("[data-testid='gymClassItem-Image']").first().click()
    cy.contains('TODAY')
    cy.contains('TOMORROW')
    cy.contains('NEXT WEEK')
  })
  it('should show the classes you booked today', ()=>{
    cy.get('#root > div > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div')
    cy.contains('TODAY').click()
  })
  it('should show the classes you booked tomorrow', ()=>{
    cy.contains('TOMORROW').click()
  })
  it('should show the classed you booked next week', ()=>{
    cy.get('#root > div > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div')
    cy.contains('NEXT WEEK').click()
  })

  it('should show the navigation menu log you out if the user logs out',()=>{
    cy.get('#root > nav > nav > div > div:nth-child(1) > div:nth-child(2) > svg > path').click()
    cy.contains('Logout').click()
  })




})