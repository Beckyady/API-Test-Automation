describe('OpenCart Login API Test', () => {
    it('Login a user via API', () => {
        cy.request({
            method: 'POST',
            url: 'https://demo.opencart.com/index.php?route=account/login',
            form: true, 
            body: {
                email: 'adeyeyebecky@gmail.com',  
                password: 'TestPassword123!',   
            },
        }).then((response) => {
            
            expect(response.status).to.eq(200);

            expect(response.redirectedToUrl).to.contain('route=account/account');
        });
    });

    it('Should fail to login with invalid credentials', () => {
        cy.request({
          method: 'POST',
          url: 'https://demo.opencart.com/index.php?route=account/login',
          form: true,
          failOnStatusCode: false, 
          body: {
            email: 'adeyeyebecky@gmail.com',  
            password: 'TestPassword123v!',  
          },
        }).then((response) => {
          expect(response.status).to.eq(200); 
    
          expect(response.body).to.include('Warning: No match for E-Mail Address and/or Password.');
        });
      });
});
