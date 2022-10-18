describe('User is Able to Reserve a Class', () => {
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

  })

  it('contains the back button and redirects you to the Purchase Page',()=>{

    cy.contains('RESERVE').click()
  })

  it('Purchase Page contains pay button and redirects you to purchase form ',()=>{
    cy.contains('Pay With Card').click()
  })

  // To test the payment and the form you shall ask for a help request;
  

  // it('Purchase Form should diplay the form ', () => {
  //   cy.get('body > iframe').eq(0).invoke('attr','name').should('contain', 'Email')
  // })
  //cy.get('#imageForm > input').eq(0).invoke('attr','name').should('contain','title')

})