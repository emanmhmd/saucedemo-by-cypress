import Cart from "../Pages/cart"
import { validlogin } from "../Pages/login";
import { validlogout } from "../Pages/logout";
import "../support/commands"
//create object from cart class
const cart_object = new Cart();

describe('Cart Test Cases', () => {
    //beforeeach to call login function before any following Test
    beforeEach(() => {
        validlogin();
      });
    //aftereach to call logout function before any following Test
    // afterEach(() => {
    //     validlogout();
    //   })
    it('Test Add items', () => {
      //adding some items to cart
      cart_object.add_items();
      //my custom command to clear cashe after each test
     //cy.clear_npm_cache();
    });
    it('Test Remove items', ()=>{
      //adding some items to cart
      cart_object.add_items();
      //removing some items from cart
      cart_object.remove_items();
      //my custom command to clear cashe after each test
      //cy.clear_npm_cache();
    });
  });
