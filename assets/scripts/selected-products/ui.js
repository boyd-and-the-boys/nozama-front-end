'use strict';

const loadSelectedProducts = require ('../../templates/shoppingcart.handlebars');

const getMyShoppingCartSuccess = (data) => {

  let totalPrice = 0;
  let price = 0;
  let selectedProducts = data.selectedProducts;
  // let count = 0;

  let calcTotalCost = function (selectedProducts) {
    price = selectedProducts._product.price * selectedProducts.quantity;
    totalPrice += price;
    data.totalPrice = totalPrice.toFixed(2);

  };

  selectedProducts.forEach(calcTotalCost, selectedProducts);
  $('.selected-products').html(loadSelectedProducts(data));
  // $('.cart-number').html(count);
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
