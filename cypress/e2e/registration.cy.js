
describe('OpenCart Registration API Test', () => {
    it('Register a new user via API', () => {
        const email = `adeyeyebecky${Date.now()}@gmail.com`; 

        cy.request({
            method: 'POST',
            url: 'https://demo.opencart.com/en-gb?route=account/register',
            form: true, 
            body: {
                firstname: 'TestFirstName',
                lastname: 'TestLastName',
                email: email,
                telephone: '1234567890',
                password: 'TestPassword123!',
                agree: '1', 
                newsletter: '0', 
            },
            followRedirect: false
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });
});

