import pdpObjects from "../../fixtures/page_objects/pdp/pdp.json";

class pdp{
    static clickAddToCart() {
        cy.get(pdpObjects.button_addToCart).click();
    }

    static increaseValueTo2() {
        // ..
    }
}

export default pdp;