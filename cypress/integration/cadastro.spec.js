/// <reference types="cypress" />

// importando a blibloteca do Faker
const FAKER = require('faker')

context('Cadastro', () => {
    it('Cadastrar um novo usuário', () => {
        cy.visit('register')

        cy.get('input[ng-model*=username]').type(FAKER.name.firstName() + FAKER.name.lastName())
        cy.get('input[ng-model*=email]').type(FAKER.internet.email())
        cy.get('input[ng-model*=password]').type('abc12345')
        cy.get('button.btn-primary').click()
    })
})

/*

Mapeando elementos

input[ng-model*=username]
input[ng-model*=email]
input[ng-model*=password]
button.btn-primary ou button[type=submit]

*/        