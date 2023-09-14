// import loginObjects from "../../fixtures/page_objects/login/login.json";
// import loginData from "../../fixtures/test_data/login/login.json";
// import pdpObjects from "../../fixtures/page_objects/pdp/pdp.json";

// class login{

//     static enterEmail() {
//         cy.get(loginObjects.emailField).type(loginData.usernameVal);
//     }

//     static enterPassword() {
//         cy.get(loginObjects.passwordField).type(loginData.passwordVal);
//     }

//     static enterCredentials() {
//         cy.get(loginObjects.emailField).type(loginData.usernameVal);
//         cy.get(loginObjects.passwordField).type(loginData.passwordVal);
//     }

//     static clickOnLoginButton() {
//         cy.get(loginObjects.buttonLogin).click();
//     }

//     static clickAddToCart() {
//         cy.get(pdpObjects.button_addToCart).click();
//     }


// }

// export default login;



// import loginObjects from "../../fixtures/page_objects/login/login.json";
// import loginData from "../../fixtures/test_data/login/login.json";
// import pdpObjects from "../../fixtures/page_objects/pdp/pdp.json";

// class login{

//     static enterEmail() {
//         cy.get(loginObjects.emailField).type(loginData.usernameVal);
//     }

//     static enterPassword() {
//         cy.get(loginObjects.passwordField).type(loginData.passwordVal);
//     }

//     static enterCredentials() {
//         cy.get(loginObjects.emailField).type(loginData.usernameVal);
//         cy.get(loginObjects.passwordField).type(loginData.passwordVal);
//     }

//     static clickOnLoginButton() {
//         cy.get(loginObjects.buttonLogin).click();
//     }

//     static clickAddToCart() {
//         cy.get(pdpObjects.button_addToCart).click();
//     }


// }

// export default login;


//zehra
import loginObjects from '../../fixtures/page_objects//login//login.json';
import loginData from '../../fixtures/test_data/login/login.json';
import pdpObjects from "../../fixtures/page_objects/pdp/pdp.json";

class login{
    static clickOnLoginLink(){
        cy.get(loginObjects.link_login).click();
    }

    static enterEmail(){
        cy.get(loginObjects.field_email).type(loginData.email_val)
    }

    static enterPassword(){
        cy.get(loginObjects.field_password).type(loginData.password_val)
    }

    static enterWrongEmail(){
        cy.get(loginObjects.field_email).type(loginData.wrongEmail_val)
    }

    static enterWrongPassword(){
        cy.get(loginObjects.field_password).type(loginData.wrongPassword_val)
    }

    static enterCredentials(){
        cy.get(loginObjects.field_email).type(loginData.email_val)
        cy.get(loginObjects.field_password).type(loginData.password_val)
    }

    static clickOnLoginButton(){
        cy.get(loginObjects.button_Login).click();
    }

    static verifyUserIsLoginSuccessfully(){
        cy.get(loginObjects.loginuser_email).should('contains.text',loginData.email_val);
    }

    static verifyUserNotLoginWithIncorrectCredintails(){
        cy.get(loginObjects.message_incorrectCredentials).should('contains.text',loginData.error_message1);
    }

    static verifyUserHasAccessTheApplication(){
        cy.visit(loginData.webAppLink);
    }

    static verifyUserNotLoginWithEmptyField(){
        cy.get(loginObjects.message_incorrectCredentials).should('contains.text',loginData.error_message2);
    }


    static clickRememberMe(){
        cy.get(loginObjects.checkbox_rememberme).click();  
    }

    static enterRecoveryEmail(){
        cy.get(loginObjects.button_PasswordRecover).type(loginData.RecoveryEmail);
    }

    static clickOnRecoverButton(){
        cy.get(loginObjects.button_recover).click();  
    }

    static clickOnForgetPasswordLink(){
        cy.get(loginObjects.link_forgetpassword).click();
    }

    static clickOnReoveryLink(){
        cy.get("//no link receive");
    }

    static clickAddToCart() {
            cy.get(pdpObjects.button_addToCart).click();
        }
}
export default login;