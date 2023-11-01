class catalogsearch{

    getTitle(){
        return cy.get('.base');
    }

    getAllProducts(){
        return cy.get('a.product-item-link');
    }

    getNoResultsMessage(){
        return cy.get('.message.notice > div');
    }


}
module.exports=new catalogsearch();