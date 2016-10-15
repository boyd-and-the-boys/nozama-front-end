'use strict';

const loadSelectedProducts = require ('../../templates/selectedproducts.handlebars');

const getSelectedProductsSuccess = (data) => {
  console.log(data);
  $('#content').html(loadSelectedProducts(data));
};

const failure = (error) => {
  console.log(error);
};

module.exports = {
  getSelectedProductsSuccess,
  failure,
};
