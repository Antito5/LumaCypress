class luma{

    getSearchBarInput(){
        return cy.get('input#search');
    }

    getSearchBarButton(){
        return cy.get('button.search');
    }

}
module.exports=new luma();
