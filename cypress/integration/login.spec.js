/// <reference types="cypress" />

//const DATEUSER = require('../fixtures/user-login.json')

import loginPage from '../support/pages/login/index'

context('Login', { browser: 'chrome' }, () => {
    
    /*

    //HACK - Esse trecho (linha 13 a 19) está dentro do arquivo cypress/support/pages/login/index.js

    let login

    before(() => {
        cy.fixture('user-login').then( dateUserLoginFixture => {
            login = dateUserLoginFixture
        })
    })
    */

    it('Realizar login com sucesso', () => {
        loginPage.acessarLogin()
        loginPage.preencherFormulario()
        loginPage.submeterFormulario()

        // Verificação
        
    })

    // HACK - Três formas de fazer o login.
    /*

    it('Realizar login com sucesso', () => {
        cy.visit('login')

        cy.get('input[ng-model*=email]').type(DATEUSER.user.email)
        cy.get('input[ng-model*=password]').type(DATEUSER.user.password)
        cy.get('button.btn-primary').click()
        
    })
    */

    /*
    let login

    before(() => {
        cy.fixture('user-login').then( dateUserLoginFixture => {
            login = dateUserLoginFixture
        })
    })

    it('Realizar login com sucesso', () => {

        // Acessar a página de login
        cy.visit('login')

        // Preencher formulário
        cy.get('input[ng-model*=email]').type(login.user.email)
        cy.get('input[ng-model*=password]').type(login.user.password)
        
        // Submeter/enviar formulário de login
        cy.get('button.btn-primary').click()

        // Verificação
        
    })
    */
    
    /*
    it('Realizar login com sucesso', () => {
        cy.visit('login')

        cy.get('input[ng-model*=email]').type(Cypress.config().user.email)
        cy.get('input[ng-model*=password]').type(Cypress.config().user.password)
        cy.get('button.btn-primary').click()
        
    })
    */
    
})