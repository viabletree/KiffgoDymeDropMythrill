import productImages from '../../pages/pdp/PDP_verifyProductImages'
import ProductNameAndDescription from '../../pages/pdp/PDP_verifyProductNameAndDescription'
import sortingFunctionality from '../../pages/pdp/PDP_verifySortingFunctionality'
import addToCartFunctionalityInPDP from '../../pages/pdp/PDP_verifyAddToCartFunctionality'
import emailAFriend from '../../pages/pdp/PDP_verifyEmailAFriendFunctionality'

describe('Test suite for PDP functionality', () => {
    beforeEach(() => {
        cy.visit('https://demowebshop.tricentis.com/');
    })

    it('Verify the presence of product images', () => {

        productImages.verifyProductImagesAreVisible()

    })

    it('Verify the product name and description', () =>{

        ProductNameAndDescription.verifyProductNameAndDescription();

    })

    it('Verify the sorting functionality', () =>{

        sortingFunctionality.verifySortingFunctionality();

    })

    it('Verify the "Add to Cart" functionality', () => {
        addToCartFunctionalityInPDP.verifyAddToCartFunctionality();

    })

    it('Verify " email a friend " functionality on PDP', () => {
        emailAFriend.verifyEmailAFriend()
    })

})
