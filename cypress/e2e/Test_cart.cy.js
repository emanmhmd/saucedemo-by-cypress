import Cart from "../Pages/cart"
import { validlogin } from "../Pages/login";
import { validlogout } from "../Pages/logout";
//create object from cart class
const cart_object = new Cart();

describe('Cart Test Cases', () => {
    //beforeeach to call login function before any following Test
    beforeEach(() => {
        validlogin();
      })
    //aftereach to call logout function before any following Test
    // afterEach(() => {
    //     validlogout();
    //   })
    it('Test Add items', () => {
      cart_object.add_items();
    })
    it('Test Remove items', ()=>{
      cart_object.add_items();
      cart_object.remove_items();
    })
  })
