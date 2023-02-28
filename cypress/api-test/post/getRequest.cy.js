describe('Test get request', () => {
   
    it('should be able to send GET request and verify response', () =>{
        //let url = Cypress.env('BASE_URL') + '/posts'
        cy.request ({
            method: 'GET',
            url: "https://jsonplaceholder.typicode.com/posts"
        }).then(response => {
            // get
            // cy.log(JSON.stringify(response.body))
            // cy.log(JSON.stringify(response.status))

            //------//
            // verify use Chai assertion library
            //expect(response.status).to.equal(200)
            //expect(response.body.length).to.equal(100)

            //-----//
            // destructrure
            let {status, body} = response
            expect(status).to.equal(200)
            expect(body.length).to.equal(100)

            // Get random element arry object
            let randomIndex = Math.random() * body.length
            let roundIndex = Math.floor(randomIndex)
            let randomObject = body[roundIndex]

            //call veriy function

            verifyNotEmpty('userID', randomObject)
            verifyNotEmpty('id', randomObject)
            verifyNotEmpty('title', randomObject)
            verifyNotEmpty('body', randomObject) 
        })
    })
})

//function to verify
function verifyNotEmpty(name, data) {
    if(!data){
        expect(true).to.equal(false, `${name} data is empty`)
    }
}