import { validlogin } from "../Pages/login";
import { invalidlogin } from "../Pages/login";


describe('Login Test Cases', () => {
  it('Test Valid Login', () => {
    validlogin();
  })
  it('Test Invalid Login', ()=>{
    invalidlogin();
  })
})