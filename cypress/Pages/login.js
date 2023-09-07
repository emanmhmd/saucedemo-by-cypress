

//class implementations of login actions
class Login{
    //function to navigate to website url
  openurl(){
      //using fixtures to get data from json file
      cy.fixture('data.json').then((data)=>{
      let websiteurl=data.url;
      cy.visit(websiteurl);
  })
  }
  //function to enter username of account
  enterusername(){
      //using fixtures to get data from json file
      cy.fixture('data.json').then((data)=>{
      let user=data.credentials.username;
      cy.get('[data-test="username"]').type(user);
  })
  }
  //function to enter right password
  enterpassword(){
      //using fixtures to get data from json file
      cy.fixture('data.json').then((data)=>{
         let pass=data.credentials.password;
      cy.get('[data-test="password"]').type(pass);
  })
} 
    //function to enter wrong password
  enterwrongpassword(){
      cy.get('[data-test="password"]').type('test');
  }

  //click on login button
  clickonlogin(){
      cy.get('[data-test="login-button"]').click();
  }
}
const loginobject = new Login() 
//function to login with valid data
export function validlogin(){
  loginobject.openurl();
  loginobject.enterusername();
  loginobject.enterpassword();
  loginobject.clickonlogin();
  
}
//function to login with invalid data
export function invalidlogin(){
  loginobject.openurl();
  loginobject.enterusername();
  loginobject.enterwrongpassword();
  loginobject.clickonlogin();
   //to check that error message appeared and contains certain text
   cy.get('.error-message-container').should('be.visible').and('contain', 'Epic sadface: Username and password do not match any user in this service');
}