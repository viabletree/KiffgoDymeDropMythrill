//Code of Add to Cart 

import dashboardObjects from '../../fixtures/page_objects/dashboard/dashboard.json'
import loginObjects from '../../fixtures/page_objects/login/login.json';
import loginData from '../../fixtures/test_data/login/login.json';
import pdpObjects from '../../fixtures/page_objects/pdp/pdp.json';
import dashboard from '../../pages/dashboard/dashboard';
import login from '../../pages/login/login';
import pdp from '../../pages/pdp/pdp';
import common from '../../pages/common/common';
// zainab's code
import addToCart from "../../Pages/add_to_cart/add_to_cart";
import atcData from '../../fixtures/test_data/add_to_cart/add_to_cart.json'

describe('Add To Cart Positive Test Cases', ()=>{
    beforeEach(()=>{
//Something you want to run before each test case
        cy.visit('https://demowebshop.tricentis.com/');
    })

    it('Verify user is able to add product to the cart and increase its value to 2', () => {
        dashboard.verifyHeaderIsVisible();
        dashboard.clickOnLoginLink();
        login.enterCredentials();
        login.clickOnLoginButton();
        dashboard.clickOnProduct();
        pdp.clickAddToCart();
        pdp.increaseValueTo2();
    })

    
// zainab's code

    it ('Verify the Add to Cart button is present',()=>{
        addToCart.verifyIfAddToCartButtonIsVisible();
    })

    it('Verify the Add to Cart button is Clickable',()=>{
        addToCart.verifyAddToCartButtonIsClickable();
    })

    // TestCase id: ATC_05
    it ('Verify the functionality of cart, user shouldn\'t be able to add product when quantity is in decimal ',()=>{
        addToCart.addProductWithInvalidQty(atcData.invalidVal_Qty_decimal);
    })
    // TestCase id: ATC_11
    it ('Verify the functionality of cart, user shouldn\'t be able to add product when quantity <= 0',()=>{
        addToCart.addProductWithInvalidQty(atcData.invalidVal_Qty);
    })

    // TestCase id: ATC_06
    it('Verify the functionality of cart, user should be able to add product when quantity is positive ',()=>{
        addToCart.addProductWithValidQty(atcData.validVal_Qty);
    })

    // TestCase id: ATC_09
    it('Verify the functionality of cart, user should be able to remove the product from the cart page.',()=>{
        addToCart.removeProductFromCart();
    })

    // TestCase id: ATC_13
    it('Verify the functionality of cart, user shouldn\'t be able to add product with invalid data in quantity field ',()=>{
        addToCart.addProductWithInvalidQty(atcData.invalidVal_Qty_spaces);
    })
    // TestCase id: ATC_15
    it ('Verify the functionality of cart, user shouldn\'t be able to add product when out of stock',()=>{
        addToCart.clickHeaderMenuBook();
        addToCart.clickProductImg2_book();
        addToCart.checkAvailability();
        addToCart.checkBtn_ATC();
    })

    it ('verify add to cart button is visible on book page',()=>{
        addToCart.verifyImgObBookPage();

    })


})




