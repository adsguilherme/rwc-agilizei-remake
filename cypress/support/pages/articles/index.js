/// <reference types="cypress" />

// Criando nossas AÇÕES com o uso de funções

// importando a blibloteca do Faker
const FAKER = require('faker')

// importando elementos
const ELEMENTS = require('./elements').ELEMENTS

import routes from '../../routes'

class Articles {

  acessarFormularioDeNewArticle(){
    cy.get(ELEMENTS.linkNovaPublicacao).click()
  }
  
  preencherFormulario(){
    // Preencher o formulario do artigo
    cy.get(ELEMENTS.inputTitle).type(FAKER.name.title())
    cy.get(ELEMENTS.inputDescription).type(FAKER.name.jobDescriptor())
    cy.get(ELEMENTS.textAreaContent).type(FAKER.lorem.paragraph())
    cy.get(ELEMENTS.inputTags).type('Cypress{enter}').type('Cy{enter}').type('Recurso de teclas{enter}')
    // HACK: Para adicionar a tag é necessário fazer o uso do {enter}, caso contrário não será salvo no artigo
    //cy.get('input[ng-model*=tagField]').type(FAKER.lorem.slug())
  }  
  
  submeterFormulario(){

    // Antes de executar as AÇÕES iremos mapear as rotas

    /*

    Avançando em rotas
    
    POST 200 /api/articles
    GET 200 /api/articles/central-division-officer-ehavqq
    GET 200 /api/articles/central-division-officer-ehavqq/comments
    
    */

    // Submeter/enviar o artigo
    cy.get(ELEMENTS.buttonSubmit).click()
    
  }
  // Verificação/Asserção
  verificarPublicacaoCriadaComSucesso(){
    
    cy.wait(`@${routes.as.postArticles}`).then((postArticlesResponse) => {
      expect(postArticlesResponse.status).to.eq(200)
    })

    cy.wait(`@${routes.as.getArticlesTitle}`).then((getArticlesTitleResponse) => {
      expect(getArticlesTitleResponse.status).to.eq(200)
    })

    cy.wait(`@${routes.as.getArticlesTitleComments}`).then((getArticlesTitleCommentsResponse) => {
      expect(getArticlesTitleCommentsResponse.status).to.eq(200)
    })
  }  
}

export default new Articles()