class Routes {

  // HACK 
  //Criando um objeto com propriedades (com chave e valor), para ter uma refatoração e reaproveitamento de código.
  //Em vez de usar  cy.route('POST', '**/api/articles').as('POSTArticles'), agora ficará  cy.route('POST', '**/api/articles').as(this.as.postArticles)

  as = {
  
    postArticles: 'POSTArticles',
    getArticlesTitle: 'GETArticlesTitle',
    getArticlesTitleComments: 'GETArticlesTitleComments'
  
  }

  init() {
    cy.server()
    cy.route('POST', '**/api/articles').as(this.as.postArticles) // realizando a chamada do objeto criado (linha 9)
    cy.route('GET', '**/api/articles/**').as(this.as.getArticlesTitle) // realizando a chamada do objeto criado (linha 10)
    cy.route('GET', '**/api/articles/**/comments').as(this.as.getArticlesTitleComments) // realizando a chamada do objeto criado (linha 11)
  }
}

export default new Routes()

/*

ALIAS

POSTArticles
GETArticlesTitle
GETArticlesTitleComments

HACK
Criando alias para poder utilizar no cy.wait do método verificarPublicacaoCriadaComSucesso()
Com o uso do alias o código fica melhor para dar manutenção e reaproveitamento de código.

*/