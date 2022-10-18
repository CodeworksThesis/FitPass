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

  it('Profile Page has a Bookings button that redirects you to the Stats page',()=>{
    cy.contains('Stats').click({force:true})
  })

  it('the stats page should do have the following',()=>{
    cy.contains('YOUR STATS');
    cy.contains('Classes Attended');
    cy.contains('Workout time');
    cy.contains('HISTORY');
  })

  it('should render all of the classes you attended', ()=>{
    // need to figure out what to put here
  })

  it('should show the navigation menu log you out if the user logs out',()=>{
    cy.get('#root > nav > nav > div > div:nth-child(1) > div:nth-child(2) > svg > path').click()
    cy.contains('Logout').click()
  })


})