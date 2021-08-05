// Criando nossas AÇÕES com o uso de funções

// importando a blibloteca do Faker
const FAKER = require('faker')

const ELEMENTS = require('./elements').ELEMENTS

class Articles {

  acessarFormularioDeNewArticle(){
    cy.get('a[href*=editor]').click()
  }
  
  preencherFormulario(){
    // Preencher o formulario do artigo
    cy.get('input[ng-model*=title]').type(FAKER.name.title())
    cy.get('input[ng-model*=description]').type(FAKER.name.jobDescriptor())
    cy.get('textarea[ng-model*=body').type(FAKER.lorem.paragraph())
    cy.get('input[ng-model*=tagField]').type('Cypress{enter}').type('Cy{enter}').type('Recurso de teclas{enter}')
    // HACK: Para adicionar a tag é necessário fazer o uso do {enter}, caso contrário não será salvo no artigo
    //cy.get('input[ng-model*=tagField]').type(FAKER.lorem.slug())
  }  
  
  submeterFormulario(){
    // Submeter/enviar o artigo
    cy.get('button.btn-primary').click()
  }
}

export default new Articles()