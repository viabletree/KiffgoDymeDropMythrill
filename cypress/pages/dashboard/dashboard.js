import dashboardObjects from "../../fixtures/page_objects/dashboard/dashboard.json";
import dashboardData from '../../fixtures/test_data/dashboard/dashboard.json'
class dashboard{

    static verifyCat(){
        for (let i = 1; i <=dashboardData.categoryCount; i++) {

            cy.get(".top-menu > :nth-child("+i+") ")
                .should('be.visible')
                .should('contain.text',dashboardData[i]);
          //  cy.get(`.top-menu > :nth-child(${i})`).should('be.visible');
        }
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


}

export default dashboard;