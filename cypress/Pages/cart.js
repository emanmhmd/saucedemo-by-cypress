
//class implementations of cart actions
export default class Cart{
    //function to add items to cart
    add_items(){
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
    }
    //function to remove items from cart
    remove_items(){
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    }

}