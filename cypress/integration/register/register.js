
import Register from '../../pages/register/register.js';


describe('Test suite for Register functionality',
    () => {
        beforeEach(() => {
            Register.website()
        })

        it('Verify successful registration with valid user details', () => {
// "1. Access application "
            Register.accessApplication ()
// "2. Click on registration link"
            Register. clickOnRegistrationButton()
            // "3. Enter the valid user details"
            Register.enterValidDetails()
            // "4.   Click on the Register button"
            Register.clickRegister()
//  "5.Click on "Continue" Button"
            Register.clickContinuebutton()

        })

        it('should successfully register a new user', () => {
            cy.wait(3000);
            // const uniqueEmail = `tester123${Math.floor(Math.random() * 10000)}@yopmail.com`
            // const password = '123456'
            Register.enterValidDetails()
            Register.clickRegister()
            //cy.contains('Your registration completed').should('be.visible')

        })
        it("Verify error message when First Name is left blank", () => {

            Register.accessApplication ()
            Register. clickOnRegistrationButton()
            Register.inputFields()
            Register.clickRegister()
            //cy.contains('Your registration completed').should('be.visible')
        })

        it("Verify error message when Password is less than 6 characters", () => {

            Register.accessApplication ()
            Register. clickOnRegistrationButton()
            Register.inputDetail()
            Register.passwordDetails()
            Register.clickRegister()
            //cy.contains('Your registration completed').should('be.visible')


        })
        it("Verify error message when Last Name is left blank", () => {

            Register.accessApplication ()
            Register. clickOnRegistrationButton()
            Register.lastname()
            Register.clickRegister()
            //cy.contains('Your registration completed').should('be.visible')
        })
        it(" Verify error message when Email is left blank", () => {

            Register.accessApplication ()
            Register. clickOnRegistrationButton()
            Register. email()
            Register.clickRegister()

        })
        it(" Verify error message when Password is left blank", () => {

            Register.accessApplication ()
            Register. clickOnRegistrationButton()
            Register.password()
            Register.clickRegister()


})
        it(" Verify error message when Email format is invalid", () => {

            Register.accessApplication ()
            Register. clickOnRegistrationButton()
            Register.invalidEmailFormat()
            Register.clickRegister()

        })
        it(" Verify error message when Email is already registered", () => {

            Register.accessApplication ()
            Register. clickOnRegistrationButton()
            Register.emailRegistered()
            Register.clickRegister()

        })
        it("  Verify error message when Password and Confirm Password do not match", () => {

            Register.accessApplication ()
            Register. clickOnRegistrationButton()
            Register.password()
            Register.mismatchedPassword()
            Register.clickRegister()

        })
    })


