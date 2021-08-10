// importando elementos
const ELEMENTS = require('./elements').ELEMENTS


let login

before(() => {
    cy.fixture('user-login').then( dateUserLoginFixture => {
        login = dateUserLoginFixture
    })
})

class LoginPage {

  acessarLogin(){
    // Acessar a página de login
    cy.visit('login')
  }

  preencherFormulario(){
    // Preencher formulário
    cy.get(ELEMENTS.inputEmail).type(login.user.email)
    cy.get(ELEMENTS.inputPassword).type(login.user.password)
  }

  submeterFormulario(){
    // Submeter/enviar formulário de login
    cy.get(ELEMENTS.buttonSubmit).click()
  }

}

export default new LoginPage() 