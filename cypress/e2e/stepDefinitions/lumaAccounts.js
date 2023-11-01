import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
const createAnAccount= require("../../pages/lumaAccount")


When(`complete First Name: {string}, Last Name: {string}, Email: {string}, Pasword: {string}, Password repetition: {string}`,(name,lastname,email,pass,pass2)=>{
    createAnAccount.getFirstNameInput().type(name);
    createAnAccount.getLastNameInput().type(lastname);
    createAnAccount.getEmailInput().type(email);
    createAnAccount.getPasswordInput().type(pass);
    createAnAccount.getPasswordConfirmation().type(pass2);
})

When(`clicks on {string} button`,()=>{
    createAnAccount.getCreateAnAccountButton().click();
})

Then(`The {string} page is displayed, showing {string} message`,(title,message)=>{
    createAnAccount.getTitle().should("have.text",title);
    createAnAccount.getWelcomeMessage().should("have.text",message);

})

Then(`showing the Account Information section with Name: {string}, Lastname:{string} and Email: {string}, Edit and Change Password buttons`,(name,lastname,email)=>{
    createAnAccount.getUserContactInfo().should("contain.text",name);
    createAnAccount.getUserContactInfo().should("contain.text",lastname);
    createAnAccount.getUserContactInfo().should("contain.text",email);
    createAnAccount.getEditButton().should("be.visible");
    createAnAccount.getChangePasswordButton().should("be.visible");

})

Then(`in the corner of the page appears the menu {string}`,(msg)=>{
    createAnAccount.getWelcomeMenu().should("have.text",msg);
})

Then(`the following message appears: {string}`,(message)=>{
    createAnAccount.getExistingEmailMessage().should("have.text",message);
})

Then(`{string} appears for First Name, Last Name, Email, Password amd Confir Password fields`,(message)=>{
    createAnAccount.getFirstnameRequiredFileMessage().should("have.text",message);
    createAnAccount.getLastnameRequiredFileMessage().should("have.text",message);
    createAnAccount.getEmailRequiredFileMessage().should("have.text",message);
    createAnAccount.getPassRequiredFileMessage().should("have.text",message);
    createAnAccount.getConfPassRequiredFileMessage().should("have.text",message);
})

When(`clicks on Sign In button in the main menu`,()=>{
    createAnAccount.getSignInButton().click();
})

When(`complete Email: {string}, Password: {string} and clicks on Sign In button`,(email,pass)=>{
    createAnAccount.getEmailFormInput().type(email);
    createAnAccount.getPassInput().type(pass);
    createAnAccount.getSignInFormButton().click();
})

Then(`The {string} page is displayed`,(title)=>{
    createAnAccount.getTitle().should("have.text",title);
})

