# Saucedemo web tesing by Cypress

"Saucedemo by Cypress" repository—a collection of automated tests designed to ensure the reliability of the Saucedemo web application. Powered by Cypress and JavaScript, my test suite meticulously examines various facets of the application, allowing you to confidently assess its functionality.  
  

## Test Cases  

The test cases included in this project are:  

1. **Test Login with Valid Credentials**: Validates the login functionality using valid credentials.  
2. **Test Login with Invalid Credentials**: Validates the login functionality using invalid credentials.  
3. **Test Add items to cart**: Tests the ability to add items to cart.  
4. **Test Remove items from cart**: Tests the process of remove items from cart.  
5. **Test Valid Checkout**: Tests the checkout process and filling all required data.  

   
## Demo  
  
You can watch a sample demo of the tests here .  

https://github.com/emanmhmd/saucedemo-by-cypress/assets/63087099/645ac901-18fe-4a8c-a90b-e25541bc2851


## Environment  

- **Cypress Version**: 13.1.0 (stable)  
- **System Platform**: Linux (Ubuntu 22.04)
- **Browser**: Chrome116(headless)    
- **Node Version**:   v18.17.1  

## Getting Started  

To run the tests, follow these steps:  

1. Clone this repository to your local machine.  
2. Navigate to the project directory.  
3. Install Cypress if you haven't already using `npm install cypress`.  
4. Start Cypress by running `npx cypress open`.  
5. In the Cypress test runner, click on the test spec file you want to run (e.g., `Test_login.cy.js`) to execute the tests.  

## Configuration  

To configure the test data, update the values in the Fixtures files, typically found in the `/cypress/fixtures` directory.  

```JSON
// Example of configuring login credentials in data.json
{
  "credentials":{
  "username": "standard_user", //add your username
  "password": "secret_sauce"   //add your password
  },
  "url":"https://www.saucedemo.com/",
  "Personalinfo":{
  "Firstname": "Joe",
  "Lastname" : "Tom",
      "code": 11311
  }
}

