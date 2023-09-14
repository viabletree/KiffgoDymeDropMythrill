//zehra
import login from '../../pages/login/login.js';

describe('Test suite for Login functionality', () => {
    beforeEach(() => {
        login.verifyUserHasAccessTheApplication();
    })
    
    it('Testcase 1: Verify user is able to open application login page', () => {

        login.clickOnLoginLink();
    })
    
    it('Testcase 2: Verify that the user is able to write email in email textbox through data driven technique', () => {
       
        login.clickOnLoginLink();
        login.enterEmail();
    })

    it('Testcase 3: Verify that the user is able to write password in password textbox', () => {
   
        login.clickOnLoginLink();
        login.enterPassword();
    })

    it('Testcase 4: Verify that the user is not able to login with unregistered email', () => {
   
        login.clickOnLoginLink();
        login.enterWrongEmail();
        login.enterPassword();
        login.clickOnLoginButton(); 
        login.verifyUserNotLoginWithIncorrectCredintails();
    })

    it('Testcase 5: Verify that the user is not able to login with invalid password', () => {
   
        login.clickOnLoginLink();
        login.enterEmail();
        login.enterWrongPassword();
        login.clickOnLoginButton();
        login.verifyUserNotLoginWithIncorrectCredintails();
    })

    it('Testcase 6: Verify that the user is able to login with registered email and valid password', () => {
   
        login.clickOnLoginLink();
        login.enterCredentials();
        login.clickOnLoginButton();
        login.verifyUserIsLoginSuccessfully();
    })

    it('Testcase 7: Verify that the user is not able to login with registered email and empty password field', () => {
   
        login.clickOnLoginLink();
        login.enterEmail();
        login.clickOnLoginButton();
        login.verifyUserNotLoginWithIncorrectCredintails();
        
    })

    it('Testcase 8: Verify that the user is not able to login with empty email field', () => {
   
        login.clickOnLoginLink();
        login.enterPassword();
        login.clickOnLoginButton();
        login.verifyUserNotLoginWithEmptyField();
    })

    it('Testcase 9: Verify that the user is not able to login with empty email and empty password field', () => {
   
        login.clickOnLoginLink();
        login.clickOnLoginButton();
        login.verifyUserNotLoginWithEmptyField();
    })

    it('Testcase 10: Verify that the user is able to check on remember me', () => {
      
        login.clickOnLoginLink();
        login.enterCredentials();
        login.clickRememberMe();
        login.clickOnLoginButton();
        login.verifyUserIsLoginSuccessfully();
    })


    it('Testcase 11: Verify that the user is able to recover password', () => {
       
        login.clickOnLoginLink();
        login.enterEmail();
        login.clickOnForgetPasswordLink();
        login.enterRecoveryEmail();
        login.clickOnRecoverButton();
        login.clickOnReoveryLink();
    })    

    it('Testcase 12: Verify that the login user email is displayed over the dashboard', () => {
   
        login.clickOnLoginLink();
        login.enterCredentials();
        login.clickOnLoginButton();
        login.verifyUserIsLoginSuccessfully();
    })

})


