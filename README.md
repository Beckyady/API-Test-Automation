# API-Test-Automation

Here i have the Api test automation for Login, registation-error and registration page on https://demo.opencart.com/

This project contains Cypress API tests for verifying the login and the registration functionality of OpenCart demo website. The tests include a successful login and handling invalid login attempts.

Prerequisites
Ensure you have the following installed on your system:

Node.js (v14 or later)
npm or yarn
Cypress will be used to run the test cases, so ensure it's installed as part of the project's dependencies

Setup Instructions
Follow these steps to set up and run the tests:

1. Clone the repository
   e.g git clone https://github.com/your-username/your-repo.git
2. Navigate into the project directory
   cd your-repo
3. Install the project dependencies
   You can use either npm or yarn to install the necessary dependencies.
   npm install
4. Running the Tests
   Once dependencies are installed, you can run the tests using Cypress.
   Run "npx cypress open"
   This will open the Cypress Test Runner interface, where you can select and run the test files.

Test Cases

1. Login a user via API
   Description: This test verifies that a user can successfully log in to the OpenCart demo site using valid credentials.
   Endpoint: POST https://demo.opencart.com/index.php?route=account/login
   Request Body:
   {
   "email": "adeyeyebecky@gmail.com",
   "password": "TestPassword123!"
   }
   Expected Result: The API should return a 200 status code, and the user should be redirected to the account page.

2. Login fails with invalid credentials
   Description: This test verifies that the login attempt fails when incorrect credentials are provided.
   Endpoint: POST https://demo.opencart.com/index.php?route=account/login
   Request Body:
   {
   "email": "adeyeyebecky@gmail.com",
   "password": "TestPassword123v!"
   }
   Expected Result: The API should return a 200 status code, but the response should include a warning message: Warning: No match for E-Mail Address and/or Password.

3. Register a New User via API
   Description: This test case verifies that a new user can successfully register on the OpenCart demo site using the registration API.
   Endpoint: POST https://demo.opencart.com/en-gb?route=account/register
   Request Body:
   {
   "firstname": "TestFirstName",
   "lastname": "TestLastName",
   "email": "dynamically_generated_email",
   "telephone": "1234567890",
   "password": "TestPassword123!",
   "agree": "1",
   "newsletter": "0"
   }
   email: The email is dynamically generated in the test to avoid conflicts with existing users. The email pattern is: adeyeyebecky<timestamp>@gmail.com.
   Expected Result: The API should return a status code of 200, indicating that the registration process was successful.

Troubleshooting
If the tests fail due to a connection issue, check your internet connection or ensure that the OpenCart demo site is accessible.
If you encounter permission issues while running the tests, try running the commands with elevated privileges

BLOCKER
The main blocker i had here was getting the correct and accurate endpoint url for these test cases
