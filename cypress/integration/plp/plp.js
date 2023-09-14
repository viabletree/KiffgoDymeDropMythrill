import plpSelector from "../../fixtures/page_objects/PLP/PLP.json"
import plpTestData from "../../fixtures/test_data/PLP/PLP.json"
import plp from "../../integration/PLP/plp1"
describe('Test suite for PLP functionality', () => {
    beforeEach(() => {
        cy.visit('https://demowebshop.tricentis.com/');
    })
    it('Verify the price displayed on PLP is same as PDP', () => {
        //plp.bookpricecheck();
        plp.computerpricecheck();

    })
    it('Verify the visibility of product suggestions', () => {
        plp.clickbook();
        plp.productsuggestion();

    })
    it('Verify the email a friend functionality', () => {

        plp.clickbook();
        plp.emailfriend();
    })
    it('Verify the presence of product images', () => {


        //plp.clickbook();
        //plp.productimage();
        plp.clickapparel();
        plp.apparelproductclick()
    })
    it('Verify the type of the product being listed.', () => {


        //plp.clickbook();
        //plp.productimage();
        plp.clickapparel();
        plp.apparelproductclick()
    })






})