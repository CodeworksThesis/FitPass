

// User logs in and check out the gym class details to then just logout
describe('The Login Page', () => {
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

  it('contains the singleGymClass item which redirects you to the gymclassDetails',()=>{

    cy.get("[data-testid='gymClassItem-Image']").first().click()
    // cy.visit('/gymclass/:id')

    // cy.url().should('include','/gymclass/:id')
  })

  it('contains the back button and redirects you to the home page',()=>{

    cy.contains('BACK').click()
  })

  it('Home page containts the Menu Item with the LogOut Button',()=>{
    cy.get('#root > nav > nav > div > div:nth-child(1) > div:nth-child(2) > svg > path').click()
  })

  it('Menu contains the LogooutButton which redirects you to the LoginPage',()=>{
    cy.contains('Logout').click()
  })



  // it('finds the content "Sign Up"', () => {
  //   cy.visit('/')

  //   cy.contains('Sign Up')

  //   cy.url().should('include', '/')
  // })

  // it('redirects to the Hom Page', () =>{
  //   cy.visit('/')
  //   cy.contains('Sign Up').click()

  // })
})



//   it('sets auth cookie when logging in via form submission', function () {
//     // destructuring assignment of the this.currentUser object
//     const { email, password } = this.currentUser

//     cy.visit('/login')

//     cy.get('input[name=email]').type(email)

//     // {enter} causes the form to submit
//     cy.get('input[name=password]').type(`${password}{enter}`)

//     // we should be redirected to /dashboard
//     cy.url().should('include', '/')

//     // our auth cookie should be present
//     // cy.getCookie('your-session-cookie').should('exist')

//     // UI should reflect this user being logged in
//     // cy.get('h1').should('contain', 'jane.lane')
//   })




