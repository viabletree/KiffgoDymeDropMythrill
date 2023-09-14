import addToCart from "../../Pages/add_to_cart/add_to_cart.js";
import dashboardObjects from "../../fixtures/page_objects/dashboard/dashboard.json";
import atcLocators from '../../fixtures/page_objects/add_to_cart/add_to_cart.json'
import atcData from '../../fixtures/test_data/add_to_cart/add_to_cart.json'
import dashboardData from "../../fixtures/test_data/dashboard/dashboard.json";
class add_to_cart{


    static verifyImgObBookPage() {
        cy.get(".top-menu > :nth-child(1) > a").click();
        for (let i = 1; i <=6 ; i++) {
            //   cy.get(':nth-child('+i+') > .product-item > .details > .add-info > .buttons > .button-2').should('exist');
            //   //cy.get(':nth-child('+i+') > .product-item > .picture > a > img').should('be.visible');
            if(i!==2 && i!==4 && i!==6)
            {
                cy.get(':nth-child(' + i + ') > .product-item > .details > .add-info > .buttons > .button-2').
                should('be.visible');
            }
        }
    }

    static clickAddToCartButton() {
        cy.get(dashboardObjects.a_product).click();
    }
// zainab's code
    static removeProductFromCart() {
        this.clickHeaderMenuBook();
        this.clickProductImgBook1();
        this.clickBtnAtcProduct1();
        cy.wait(800);
        this.clickLinkShoppingCart();
        this.clickCheckboxRemove();
        this.clickBtnUpdateShoppingCart();
    }

    static addProductWithValidQty(qty) {
        this.clickProductImg2();
        this.enterQty(qty);
        this.clickAddToCart();
        this.validateSuccessMsg();
    }

    static addProductWithInvalidQty(qty) {
        this.clickProductImg2();
        this.enterQty(qty);
        this.clickAddToCart();
        this.validateErrorMsg();
    }

    static navigate() {
        cy.visit(atcData.url_website);
    }

    static verifyIfAddToCartButtonIsVisible() {
        cy.get(atcLocators.buttonAtc_product2_home).should('be.visible');
    }

    static verifyAddToCartButtonIsClickable() {
        cy.get(atcLocators.buttonAtc_product2_home).click();
    }

    static clickProductImg1() {
        cy.get(atcLocators.productImg1_home).click();
    }

    static clickProductImg2() {
        cy.get(atcLocators.productImg2_home).click();
    }

    static enterQty(qty) {
        cy.get(atcLocators.qtyField)
            .clear()
            .type(qty);
    }

    static clickAddToCart() {
        cy.get(atcLocators.buttonAtc_product2Pdp_home).click();
    }

    static validateErrorMsg() {
        cy.get(atcLocators.textMsg)
            .should('contain.text', atcData.txt_errorMsg);
    }

    static validateSuccessMsg() {
        cy.get(atcLocators.textMsg)
            .should('contain.text', atcData.txt_successMsg);
    }

    static clickHeaderMenuBook() {
        cy.get(atcLocators.headerMenu_book).click();
    }

    static clickProductImgBook1() {
        cy.get(atcLocators.imgProduct_book1).click();

    }

    static clickBtnAtcProduct1() {
        cy.get(atcLocators.buttonAtc_product1Pdp_book).click();
    }

    static clickLinkShoppingCart() {
        cy.get(atcLocators.link_shoppingCart).click();
    }

    static clickCheckboxRemove() {
        cy.get(atcLocators.checkbox_remove).click();
    }

    static clickBtnUpdateShoppingCart() {
        cy.get(atcLocators.buttonUpdate_ShoppingCart).click();
    }

    static checkAvailability() {
        cy.get(atcLocators.value_availability).should('contain.text', atcData.availability)
    }

    static clickProductImg2_book() {
        cy.get(atcLocators.productImg2_book).click();
    }

    static checkBtn_ATC() {
        cy.get(atcLocators.panel_productDetail).should('not.contain', atcLocators.txtBtn);
    }


}

export default add_to_cart;