
Cypress.Commands.add('GetMethod', (movie)=>{
    cy.request({
        method: 'GET',
        url: `${Cypress.env('baseurl')}/${movie}`,
        failOnStatusCode: false
    })
})