// cypress/e2e/page_objects/amazon-product.js

class Product {
      
    constructor() {
        this.productName;
        this.productPrice;
        this.index;
        
        // locator
        this.searchBar              = '#twotabsearchtextbox';
        this.searchButton           = '#nav-search-submit-button';
        this.productFilter          = '#a-autoid-0-announce';
        this.filterPrice_HighLow    = '#s-result-sort-select_2';
        this.productList            = 'div[role="listitem"]';
        this.text_ProductName       = 'div[data-cy="title-recipe"]';
        this.text_ProductPrice      = '.a-offscreen';
        this.productDetail_Name     = '#productTitle';
        this.productDetail_Price    = '#corePriceDisplay_desktop_feature_div';
    }


    SearchProduct(keyword, indexProduct) {
        this.index = indexProduct;

        // type product keyword
        cy.get(this.searchBar, { timeout: 10000 }).type(keyword);

        // click search button
        cy.get(this.searchButton).click();
        
        // click dropdown filter product
        cy.get(this.productFilter).click();

        // select filter Price: High to Low
        cy.get(this.filterPrice_HighLow).click();


        // get product name
        cy.get(this.productList).eq(this.index).find(this.text_ProductName).invoke('text').as('productName');
        cy.get('@productName').then((text) => {
            this.productName = text
        });


        // get product price
        cy.get(this.productList).eq(this.index).find(this.text_ProductPrice).invoke('text').as('productPrice');
        cy.get('@productPrice').then((text) => {
            this.productPrice = text
        });
    }


    GetProductDetail() {
        // click product name
        cy.get(this.productList).eq(this.index).find(this.text_ProductName).click();

        
        // verify product name & price
        cy.then(() => {
            cy.get(this.productDetail_Name).should('contain', this.productName);
            cy.get(this.productDetail_Price).should('contain', this.productPrice);
        });

    }
}

export default Product;