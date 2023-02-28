describe('Delete request', () => {
    it('It should be able to send delete method', ()=> {
        

        
        cy.request({
            method: 'DELETE',
            url: "https://jsonplaceholder.typicode.com/posts/1",
        }).then(res => {
            let {status} = res
            cy.log(JSON.stringify(res))
            expect(status).to.equal(200, 'Verify delete successfully')
        })
    })
})