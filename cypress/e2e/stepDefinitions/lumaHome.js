import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
const lumaHome= require("../../pages/LumaHome.js")
const catalogoSearch= require("../../pages/catalogSearch.js")


When(`Search the word {string} in the search bar`, (value)=>{

    lumaHome.getSearchBarInput().type(value);
    lumaHome.getSearchBarButton().click(); 

})

Then(`the search returns all products with word {string} in the name`, (value)=>{
    catalogoSearch.getTitle().should("have.text","Search results for: '"+value+"'");
    catalogoSearch.getAllProducts().each((btn,$inx)=>{
        if($inx < 12)
        {
            cy.wrap(btn).should("contain.text", value);
        }

        })

})