import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
const lumaHome= require("../../pages/LumaHome.js")
const catalogoSearch= require("../../pages/catalogSearch.js")


When(`Search the word {string} in the search bar`, (value)=>{

    lumaHome.getSearchBarInput().type(value);
    lumaHome.getSearchBarButton().click(); 

})

Then(`The search page is open showing the title {string}`, (title)=>{
    catalogoSearch.getTitle().should("contain.text",title);
})

Then(`the search returns all products with word {string} in the name`, (value)=>{
  
    catalogoSearch.getAllProducts().each((btn,$inx)=>{
        if($inx < 12)
        {
            cy.wrap(btn).should("contain.text", value);
        }

        })

})

When(`clicks on {string} button in the main menu`,(button)=>{
    lumaHome.getCreateAnAccountButton().click();
})

Then(`The search page is open showing a {string} message`,(message)=>{
    catalogoSearch.getNoResultsMessage().should("contain.text",message);
})