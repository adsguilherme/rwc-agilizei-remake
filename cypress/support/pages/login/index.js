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
    cy.get('input[ng-model*=email]').type(login.user.email)
    cy.get('input[ng-model*=password]').type(login.user.password)
  }

  submeterFormulario(){
    // Submeter/enviar formulário de login
    cy.get('button.btn-primary').click()
  }

}

export default new LoginPage() 