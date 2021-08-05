/// <reference types="cypress" />

import articles from '../support/pages/articles/index'

// importando a blibloteca do Faker
//const FAKER = require('faker') //HACK - O Faker está sendo utilizado no arquivo index.js que contem a função que foi criada.


context('Publicação', () => {
  
  // hooks -> momentos antes / depois do teste
  // before (antes de todos os testes) / beforeEach (antes de cada teste)
  // after (depois de todos os testes) / afterEach (depois de cada teste)
  
  beforeEach(() => {    

    // Preparação
    cy.backgroundLogin() // HACK - Custom Command

    articles.acessarFormularioDeNewArticle()
    
  })
    it('Criar uma nova publicação', () => {

      // Execução/Ação
      articles.preencherFormulario()
      articles.submeterFormulario()

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