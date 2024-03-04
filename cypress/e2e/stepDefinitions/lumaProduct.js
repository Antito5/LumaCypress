import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
const lumaCart= require("../../pages/lumaCart.js")
const lumaHome= require("../../pages/LumaHome.js")
const catalogoSearch= require("../../pages/catalogSearch.js")
const productPage= require("../../pages/product.js")


When(`Select {string} product`, (product)=>{

    catalogoSearch.getAllProducts().each(($btn, index) => {
        // Accede al texto del botón y verifica si incluye el producto buscado
        cy.wrap($btn).invoke('text').then(text => {
            if (text.includes(product)) {
                // Si encuentra el producto, haz clic en el botón
                cy.wrap($btn).click();
            }
        });
    });

})

When(`select the color {string}`, (color)=>{

    productPage.getProductColor().eq(1).click();


})

When(`select {string} button`,()=>{
    productPage.getAddToCartButton().click();
})



When(`Select size {string}`, (size)=>{

productPage.getProductSizes().each(($btn,index)=>{

    cy.wrap($btn).invoke('text').then(text=>{
        if(text.includes(size)){
            cy.wrap($btn).click();
        }
    });

});

})

Then(`Appears the {string} message`,(msg)=>{
    productPage.getAddedMessage().should('contains.text',msg);
})

Then(`the cart icon shows {string} label`,(num)=>{
    productPage.getCounterCart().should('have.text',num);
})
    
Then(`The cart modal shows the {string} product`,(product)=>{
    productPage.getCounterCart().click();
    cy.wait(3000);
    productPage.getMiniCartItems().each(($btn,index)=>{
        cy.wrap($btn).should('contain.text',product);
    })
})

Then(`The cart modal shows the {string} button`,(boton)=>{
    productPage.getProceedToCheckoutButton().should('be.visible');
})


