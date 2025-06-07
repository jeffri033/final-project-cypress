/// <reference types="cypress" />

import Product from '../page_objects/amazon-product';
const product = new Product();


describe("AMAZON SEARCHING PRODUCT", function () {

  before(function () { 
    cy.viewport(1920, 1080);

    const url = Cypress.env('url_amazon');
    cy.visit(url);
  });


  it("Search Product", function () {
      let keyword = 'chair';
      let indexProduct = 4;

      // search product
      product.SearchProduct(keyword, indexProduct);

      // get detail product
      product.GetProductDetail();
  })
})