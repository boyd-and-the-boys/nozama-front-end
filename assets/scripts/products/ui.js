'use strict';

const loadProducts = require ('../../templates/products.handlebars');

const getProductsSuccess = (data) => {
  console.log(data);
  $('#content').html(loadProducts(data));
};

const failure = (error) => {
};

module.exports = {
  getProductsSuccess,
  failure,
};
