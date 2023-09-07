import { validlogin } from "../Pages/login";
import { invalidlogin } from "../Pages/login";
import "../support/commands"

describe('Login Test Cases', () => {
  //test login with correct credentials
  it('Test Valid Login', () => {
    validlogin();
    //my custom command to clear cashe after each test
    //cy.clear_npm_cache();
  });
  //test login with wrong credentials
  it('Test Invalid Login', ()=>{
    invalidlogin();
    //my custom command to clear cashe after each test
    //cy.clear_npm_cache();
  });
});