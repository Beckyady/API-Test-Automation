describe('Registration Error Handling - Duplicate Email', () => {
    it('Should return an error when trying to register with an already used email', () => {
        cy.request({
            method: 'POST',
            url: 'https://demo.opencart.com/index.php?route=account/register',
            form: true,
            failOnStatusCode: false, 
            body: {
                firstname: 'TestFirstName',
                lastname: 'TestLastName',
                email: 'adeyeyebecky@gmail.com', 
                password: 'TestPassword123!',
                agree: '1',
                newsletter: '0',
            },
        }).then((response) => {
       
            expect(response.status).to.eq(200); 
            expect(response.body).to.contain("Warning: E-Mail Address is already registered!");
        });
    });
});
