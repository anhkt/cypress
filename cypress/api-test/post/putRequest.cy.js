describe('Put request', () => {
    it('Should be able to send put request', () => {
        let bodyReq = {
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        }
        //let url = Cypress.env('BASE_URL') + '/posts/1'
        cy.request({
            method: 'PUT',
            header:  {'Content-type': 'application/json; charset=UTF-8'},
            body: bodyReq,
            url: "https://jsonplaceholder.typicode.com/posts/1"
        }).then(res => {
            let {status} = res
            expect(status).to.equal(200, 'Verify status');
            let {body} = res.body;
            expect(bodyReq.body).to.equal(body, 'Verify body')
        })
    })
})