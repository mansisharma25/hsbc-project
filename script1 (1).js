// cypress/integration/hsbc_login_spec.js

describe('HSBC Login Test', function() {
    it('should login to HSBC.co.in', function() {
        cy.visit('https://www.hsbc.co.in/')
        cy.contains('Log on').click()
        cy.get('#username').type('your_username')
        cy.get('#password').type('your_password')
        cy.get('#hp-logon').click()
        // Add assertions or further actions as needed
    })
})
