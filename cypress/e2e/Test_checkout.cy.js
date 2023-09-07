import Checkout from "../Pages/checkout"
import { validlogin } from "../Pages/login";
import Cart from "../Pages/cart"
import "../support/commands"
//create object from cart class
const cart_object = new Cart();
//create object from checkout class
const checkout_object = new Checkout();

describe('Checkout Test Cases', () => {
    //beforeeach to call login function before any following Test
    beforeEach(() => {
        validlogin();
        //adding some items to the cart
        cart_object.add_items();
     });

    it('Test Valid Checkout', () => {
      //calling functions related to checkout process
     checkout_object.navigate_to_cart();
     checkout_object.fill_info();
     checkout_object.finish_shopping();
     //my custom command to clear cashe after each test
     //cy.clear_npm_cache();
    });
   
  });