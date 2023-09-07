
//class implementations of checkout actions
export default class Checkout{
    //navigate to cart page
    navigate_to_cart(){
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="checkout"]').click();

    }
    //fill personal information of the user 
    fill_info(){
        //using fixture to get data from json file then put them in their fields
        cy.fixture('data.json').then((data)=>{
        cy.get('[data-test="firstName"]').type(data.Personalinfo.Firstname);
        cy.get('[data-test="lastName"]').type(data.Personalinfo.Lastname);
        cy.get('[data-test="postalCode"]').type(data.Personalinfo.code);
        });
        //click on continue button
        cy.get('[data-test="continue"]').click();
    }
    finish_shopping(){
        cy.get('[data-test="finish"]').click();
        //doing assert on comfirmation message
        cy.get('.complete-text').should('be.visible').and('contain', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    }
    
}