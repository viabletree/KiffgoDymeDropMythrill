import RegisterObjects from '../../fixtures/page_objects/register/register.json'
const uniqueEmail = `tester123${Math.floor(Math.random() * 10000)}@yopmail.com`
const password = '123456'
class register {
    static accessApplication() {
        cy.get(RegisterObjects.headText).should('be.visible');
    }

    static clickOnRegistrationButton() {
        cy.get(RegisterObjects.button_register).click();
    }

    static enterValidDetails() {
        cy.get(RegisterObjects.field_firstName).type("testers");
        cy.get(RegisterObjects.field_lastName).type("123");
        cy.get(RegisterObjects.field_email).type(uniqueEmail);
        cy.get(RegisterObjects.field_passwordd).type(password);
        cy.get(RegisterObjects.field_confirmPassword).type(password);
    }

    static clickRegister() {
        cy.get(RegisterObjects.button_registers).click();
    }

    static clickContinuebutton() {
        cy.get(RegisterObjects.button_continue).click();
    }

    static uniqueEmail() {
        cy.get(RegisterObjects.field_emails).type(uniqueEmail);

    }

    static passwordDetails() {
        cy.get(RegisterObjects.field_passwordd).type('12345');
        cy.get(RegisterObjects.field_confirmPassword).type('12345');
    }

    static inputFields() {
        cy.get(RegisterObjects.field_lastName).type("123");
        cy.get(RegisterObjects.field_email).type(uniqueEmail);
        cy.get(RegisterObjects.field_passwordd).type(password);
        cy.get(RegisterObjects.field_confirmPassword).type(password);
    }

    static website() {
        cy.visit(RegisterObjects.link_website);
        cy.contains('Register').click();
    }

    static inputDetail() {
        cy.get(RegisterObjects.field_firstName).type("testers");
        cy.get(RegisterObjects.field_lastName).type("123");
        cy.get(RegisterObjects.field_email).type(uniqueEmail);
    }

    static lastname(){
        cy.get(RegisterObjects.field_firstName).type("testers");
        cy.get(RegisterObjects.field_email).type(uniqueEmail);
        cy.get(RegisterObjects.field_passwordd).type(password);
        cy.get(RegisterObjects.field_confirmPassword).type(password);


    }
    static email(){
        cy.get(RegisterObjects.field_firstName).type("testers");
        cy.get(RegisterObjects.field_lastName).type("123");
        //cy.get(RegisterObjects.field_email).type("");
        cy.get(RegisterObjects.field_passwordd).type(password);
        cy.get(RegisterObjects.field_confirmPassword).type(password);

    }
    static password(){
        cy.get(RegisterObjects.field_firstName).type("testers");
        cy.get(RegisterObjects.field_lastName).type("123");
        cy.get(RegisterObjects.field_email).type(uniqueEmail);
        //cy.get(RegisterObjects.field_passwordd).type("");
        //cy.get(RegisterObjects.field_confirmPassword).type("");


    }
    static invalidEmailFormat() {
        cy.get(RegisterObjects.field_firstName).type("testers");
        cy.get(RegisterObjects.field_lastName).type("123");
        cy.get(RegisterObjects.field_email).type("tester123@yopmailcom.");
        cy.get(RegisterObjects.field_passwordd).type(password);
        cy.get(RegisterObjects.field_confirmPassword).type(password);


    }
    static emailRegistered(){
        cy.get(RegisterObjects.field_firstName).type("testers");
        cy.get(RegisterObjects.field_lastName).type("123");
        cy.get(RegisterObjects.field_email).type("tester123@yopmail.com");
        cy.get(RegisterObjects.field_passwordd).type("123456");
        cy.get(RegisterObjects.field_confirmPassword).type("123456");
    }
    static mismatchedPassword(){
        cy.get(RegisterObjects.field_passwordd).type("123456");
        cy.get(RegisterObjects.field_confirmPassword).type("12345");
    }

}

export default register;
