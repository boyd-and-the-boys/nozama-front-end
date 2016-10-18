'use strict';

const loadSelectedProducts = require ('../../templates/shoppingcart.handlebars');

const getMyShoppingCartSuccess = (data) => {
  console.log(data);
  $('.selected-products').html(loadSelectedProducts(data));
};

const createSelectedProductsSuccess = (data) => {
  console.log(data);
};
//
// const patchSelectedProductsSuccess = (data) => {
//   console.log(data);
// };
// //
// const deleteSelectedProductsSuccess = (data) => {
//   console.log(data);
// };

const failure = (error) => {
  console.log(error);
};

module.exports = {
  getMyShoppingCartSuccess,
  createSelectedProductsSuccess,
  // patchSelectedProductsSuccess,
  // deleteSelectedProductsSuccess,
  failure,
};
