/// <reference types="cypress" />

// importando a blibloteca do Faker
const FAKER = require('faker')


context('Publicação', () => {
  
  // hooks -> momentos antes / depois do teste
  // before (antes de todos os testes) / beforeEach (antes de cada teste)
  // after (depois de todos os testes) / afterEach (depois de cada teste)
  
  beforeEach(() => {    

    // Preparação

    cy.backgroundLogin() // HACK - Custom Command
    cy.get('a[href*=editor]').click()
  })
    it('Criar uma nova publicação', () => {

      // Execução/Ação

      cy.get('input[ng-model*=title]').type(FAKER.name.title())
      cy.get('input[ng-model*=description]').type(FAKER.name.jobDescriptor())
      cy.get('textarea[ng-model*=body').type(FAKER.lorem.paragraph())
      cy.get('input[ng-model*=tagField]').type('Cypress{enter}').type('Cy{enter}').type('Recurso de teclas{enter}')
      // HACK: Para adicionar a tag é necessário fazer o uso do {enter}, caso contrário não será salvo no artigo
      //cy.get('input[ng-model*=tagField]').type(FAKER.lorem.slug())
      cy.get('button.btn-primary').click()


      // Verificação


    })
})

/*

Separando o teste em etapas com a técnica AAA
AAA -> Arrange Act Assert

-> Preparação
-> Execução
-> Verificação/Validaçaõ

*/