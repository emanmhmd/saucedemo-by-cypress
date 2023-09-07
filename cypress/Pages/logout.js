

//class implementations of logout actions
class Logout{
    //funtion to open burger menu
    open_side_menu(){
        cy.get('.complete-text').click();
    }
    //function to click on logout button
    click_on_logout(){
        cy.get('#logout_sidebar_link').click();
    }

}
//create object of logout class
const logout_object = new Logout();
//function to logout
export function validlogout(){
    logout_object.open_side_menu();
    logout_object.click_on_logout();
}