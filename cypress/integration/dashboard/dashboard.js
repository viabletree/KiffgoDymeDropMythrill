let headerMenu = ".header-menu2";
import dashboardObjects from '../../fixtures/page_objects/dashboard/dashboard.json';
import dashboardPOM from '../../fixtures/page_objects/dashboard/dashboard.json';
import dashboard from '../../pages/dashboard/dashboard';

describe('Test suite for Dashboard functionality', () => {
    beforeEach(() => {
        cy.visit('https://demowebshop.tricentis.com/');
    })

    it('Verify the category section and categories are clickable', () => {
        cy.get(dashboardObjects.headerMenu).should('be.visible');
        cy.get(dashboardObjects.headerMenu_books).click();
        cy.get(dashboardObjects.headerMenu_books).trigger("mouseover").click();
        cy.get(dashboardObjects.pageTitle).should('contain.text','Books');
    })

    it('Verify the category section and categories are clickable', () => {
        cy.get(".header-menu").should('be.visible');
        cy.get('.top-menu > :nth-child(1) > a').click();
        cy.get('.top-menu > :nth-child(1) > a').trigger("mouseover").click();
        cy.get('h1').should('contain.text','Books');
    })

    it.only('Verify the category  clickable', () => {
        dashboard.verifyCat();
    })

})