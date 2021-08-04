// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

Cypress.Commands.add('backgroundLogin', () => {
/*
  LOGIN BACKGROUND
    01 - Realizar uma requisição do tipo POST com email e senha
    02 - Capturar o token que é recebido da nossa requisição
    03 - Usar o token recebido para salvar no localStorage
  */
  
    cy.request({
      method: 'POST',
        url: `${Cypress.config().apiUrl}users/login`,
        body: {
          user: {
            email: 'gscodeauto86@gscodeauto86.com',
            password: 'abc12345',
          }
        }
      }).then((loginResponse) => {
        //console.log(loginResponse.body)
        cy.log(loginResponse.body.user.token)
        
        cy.visit('/', {
          onBeforeLoad: (win) => {
            win.localStorage.setItem('jwtToken', loginResponse.body.user.token)
          }
        })
      })
})
