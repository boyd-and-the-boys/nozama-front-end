'use strict';

const loadProducts = require ('../../templates/products.handlebars');

const getProductsSuccess = (data) => {
  $('#content').html(loadProducts(data));
};

const failure = (error) => {
};

module.exports = {
  getProductsSuccess,
  failure,
};
