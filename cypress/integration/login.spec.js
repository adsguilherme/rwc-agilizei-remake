/// <reference types="cypress" />

//const DATEUSER = require('../fixtures/user-login.json')

context('Login', () => {

    // HACK - Três formas de fazer o login.
    /*

    it('Realizar login com sucesso', () => {
        cy.visit('login')

        cy.get('input[ng-model*=email]').type(DATEUSER.user.email)
        cy.get('input[ng-model*=password]').type(DATEUSER.user.password)
        cy.get('button.btn-primary').click()
        
    })
    */

    
    let login

    before(() => {
        cy.fixture('user-login').then( dateUserLoginFixture => {
            login = dateUserLoginFixture
        })
    })

    it('Realizar login com sucesso', () => {
        cy.visit('login')

        cy.get('input[ng-model*=email]').type(login.user.email)
        cy.get('input[ng-model*=password]').type(login.user.password)
        cy.get('button.btn-primary').click()
        
    })
    
    
    /*
    it('Realizar login com sucesso', () => {
        cy.visit('login')

        cy.get('input[ng-model*=email]').type(Cypress.config().user.email)
        cy.get('input[ng-model*=password]').type(Cypress.config().user.password)
        cy.get('button.btn-primary').click()
        
    })
    */
    
})