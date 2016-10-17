'use strict';

const loadSelectedProducts = require ('../../templates/selectedproducts.handlebars');

const getSelectedProductsSuccess = (data) => {
  console.log(data);
  $('#content').html(loadSelectedProducts(data));
};

const postSelectedProductsSuccess = (data) => {
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
  getSelectedProductsSuccess,
  postSelectedProductsSuccess,
  // patchSelectedProductsSuccess,
  // deleteSelectedProductsSuccess,
  failure,
};
