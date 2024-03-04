class product{

getProductTitle(){
    return cy.get('span.base');
}

getProductRatingValue(){
    return cy.get('div.rating-result');
}

getProductReviewCount(){
    return cy.get('.add');
}

getAddYourReviewButton(){
    return cy.get('.add');
}

getProductPrices(){
    return cy.get('span.price-wrapper');
}

getProductStock(){
    return cy.get('div.stock');
}

getProductSKU(){
    return cy.get('div.sku');
}

getProductSizes(){
    return cy.get('div.swatch-option');
}

getProductColor(){
    return cy.get('div.swatch-option.color');
}

getProductColorTooltip(){
    return cy.get('div.swatch-option-tooltip');
}

getProductQuantity(){
    return cy.get('input#qty');
}

getAddToCartButton(){
    return cy.get('#product-addtocart-button');
}

getAddToWishListButtons(){
    return cy.get('a.action.towishlist');
}

getAddToCompareButtons(){
    return cy.get('a.action.tocompare');
}

getDetailsSection(){
    return cy.get('div.description');
}

getMoreInformationButton(){
    return cy.get('a#tab-label-additional-title');
}

getMoreInformationSection(){
    return cy.get('div.additional-attributes-wrapper');
}

getReviewsButton(){
    return cy.get('a#tab-label-reviews-title');
}


getRelatedProductsList(){
    return cy.get('.items.list.product-items.products');
}

getAddedMessage(){
    return cy.get('div[role="alert"] > div > div');
}

getCounterCart(){
    return cy.get('span.counter-number');
}

getMiniCartItems(){
    return cy.get('.minicart-items-wrapper');
}

getProceedToCheckoutButton(){
    return cy.get('#top-cart-btn-checkout');
}



}
module.exports=new product();