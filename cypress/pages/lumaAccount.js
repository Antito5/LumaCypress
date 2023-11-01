class lumaAccount{

    getFirstNameInput(){
        return cy.get('input#firstname');
    }

    getLastNameInput(){
        return cy.get('input#lastname');
    }

    getEmailInput(){
        return cy.get('input#email_address');
    }

    getPasswordInput(){
        return cy.get('input#password');
    }

    getPassInput(){
        return cy.get('fieldset #pass');
    }


    getPasswordConfirmation(){
        return cy.get('input#password-confirmation');
    }

    getCreateAnAccountButton(){
        return cy.get('[title="Create an Account"]');
    }

    getTitle(){
        return cy.get('.base');
    }

    getWelcomeMessage(){
        return cy.get('div[role="alert"] > div > div');
    }

    getUserContactInfo(){
        return cy.get('.column.main p');
    }

    getEditButton(){
        return cy.get('.box.box-information > .box-actions > .action.edit > span');
    }

    getChangePasswordButton(){
        return cy.get('.action.change-password');
    }

    getWelcomeMenu(){
        return cy.get('.header.panel > .header.links > .greet.welcome > .logged-in');
    }

    getExistingEmailMessage(){
        return cy.get('div[role="alert"] > div > div');
    }

    getFirstnameRequiredFileMessage(){
        return cy.get('div#firstname-error');
    }

    getLastnameRequiredFileMessage(){
        return cy.get('div#lastname-error');
    }   
    
    getEmailRequiredFileMessage(){
        return cy.get('div#email_address-error');
    }

    getPassRequiredFileMessage(){
        return cy.get('div#password-error');
    }

    getConfPassRequiredFileMessage(){
        return cy.get('div#password-confirmation-error');
    }

    getSignInButton(){
        return cy.get('.header.panel > .header.links > .authorization-link > a');
    }

    getSignInFormButton(){
        return cy.get('fieldset .primary:nth-of-type(1) span');
    }
    getEmailFormInput(){
        return cy.get('input#email');
    }
}
module.exports=new lumaAccount();
