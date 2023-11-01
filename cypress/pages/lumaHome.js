class luma{

    getSearchBarInput(){
        return cy.get('input#search');
    }

    getSearchBarButton(){
        return cy.get('button.search');
    }

    getCreateAnAccountButton(){
        return cy.get('.header.panel > .header.links > li:nth-of-type(3) > a');
    }

}
module.exports=new luma();
