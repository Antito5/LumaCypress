class catalogsearch{

    getTitle(){
        return cy.get('.base');
    }

    getAllProducts(){
        return cy.get('a.product-item-link');
    }

}
module.exports=new catalogsearch();