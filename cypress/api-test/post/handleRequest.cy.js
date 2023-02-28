//const { resolve, reject } = require("cypress/types/bluebird")

describe('Handling async request in Cypress', () => {
    it('Should be able to await until a request resolved', async () => {
        let header = {
            'Content-type': 'application/json; charset=UTF-8'
        }
        let url = Cypress.env('BASE_URL') + '/posts'

        cy.request({
            method: 'POST',
            url: url,
            header: header,
            body : {
                title: 'foo',
                body: 'bar',
                userId: 1
            }
        }).then(res => {
            cy.log(JSON.stringify(res))
            const postID = res.body.id
            cy.request({
                method: 'PUT',
                header: header,
                url: Cypress.env('BASE_URL') + '/posts' + '/'+ (postID-1),
                body: {
                    title: 'fooTest',
                    body: 'barTest',
                    userId: 1
                }
            }).then(res => {
                cy.log(JSON.stringify(res))
                cy.request({
                    method: 'DELETE',
                    url: Cypress.env('BASE_URL') + '/posts' + '/'+ (postID-1)
                }).then(res => {
                    cy.log(JSON.stringify(res))
                })
            })
        })
    })
})