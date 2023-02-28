describe('Test post request', () => {
    it('should be able send post request', () => {
        console.log(Cypress.env().BASE_URL)
        let header = {
            'Content-type': 'application/json; charset=UTF-8'
        }
        //let url = Cypress.env('BASE_URL') + '/posts'

        let requestBody = {
            title: 'foo',
            body: 'bar',
            userId: 1
        }

        let requestObject = {
            method: 'POST',
            url: "https://jsonplaceholder.typicode.com/posts",
            header: header,
            body: requestBody
        }

        cy.request(requestObject).then (res => {
            let {status, body} = res
            // cy.log(JSON.stringify(body))
            expect(status).to.equal(201, 'Status is not 200')
            
            let {userId, id, title} = body
            let responseBody = body.body

            expect(userId).to.equal(requestBody.userId, 'userId is not correct' )
            expect(id).to.equal(101, 'id is not correct')
            expect(title).to.equal(requestBody.title, 'title is not correct')
            expect(responseBody).to.equal(requestBody.body, 'body is not correct')
        })
    })
})