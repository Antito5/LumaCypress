import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given(`the user goes to {string} page`, (urlName)=> {
    if(urlName=="Luma"){
        cy.visit("https://magento.softwaretestingboard.com/");
    }
})
