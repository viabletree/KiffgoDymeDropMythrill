import dashboardObjects from "../../fixtures/page_objects/dashboard/dashboard.json";
import loginObjects from "../../fixtures/page_objects/login/login.json";
import loginData from "../../fixtures/test_data/login/login.json";
import pdpObjects from "../../fixtures/page_objects/pdp/pdp.json";

class common{

    static performATC() {
        this.verifyUSerHasAccessedApplication();
        this.verifyHeaderIsVisible();
        this.clickOnLoginLink();
        this.enterCredentials();
        this.clickOnProduct();
        this.clickAddToCart();
    }

    static clickAddToCart() {
        cy.get(pdpObjects.button_addToCart).click();
    }

    static verifyUSerHasAccessedApplication() {
        cy.get(dashboardObjects.headerMenu).should('be.visible');
    }

    static verifyHeaderIsVisible() {
        cy.get(dashboardObjects.headerMenu).should('be.visible');
    }

    static clickOnLoginLink() {
        cy.get(dashboardObjects.buttonLogin).click();
    }

    static clickOnProduct() {
        cy.get(dashboardObjects.a_product).click();
    }

    static enterEmail() {
        cy.get(loginObjects.emailField).type(loginData.usernameVal);
    }

    static enterPassword() {
        cy.get(loginObjects.passwordField).type(loginData.passwordVal);
    }

    static enterCredentials() {
        cy.get(loginObjects.emailField).type(loginData.usernameVal);
        cy.get(loginObjects.passwordField).type(loginData.passwordVal);
    }

    static clickOnLoginButton() {
        cy.get(loginObjects.buttonLogin).click();
    }





}

export default common;