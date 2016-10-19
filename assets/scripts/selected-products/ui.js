'use strict';

const loadSelectedProducts = require ('../../templates/shoppingcart.handlebars');


const getMyShoppingCartSuccess = (data) => {

  let totalPrice = 0;
  let price = 0;
  let selectedProducts = data.selectedProducts;

  let calcTotalCost = function (selectedProducts) {
    price = selectedProducts._product.price * selectedProducts.quantity;
    totalPrice += price;
    data.totalPrice = totalPrice.toFixed(2);
  };
  selectedProducts.forEach(calcTotalCost, selectedProducts);
  $('.selected-products').html(loadSelectedProducts(data));
};

const getMyOrderSuccess = (data) => {

  let totalPrice = 0;
  let price = 0;
  let selectedProducts = data.selectedProducts;

  let calcTotalCost = function (selectedProducts) {
    console.log(selectedProducts);
    price = selectedProducts._product.price * selectedProducts.quantity;
    totalPrice += price;
    data.totalPrice = totalPrice.toFixed(2);
  };
  selectedProducts.forEach(calcTotalCost, selectedProducts);
  $('#user-page').html(loadSelectedProducts(data));
};

const createSelectedProductsSuccess = (data) => {
};

const updateSelectedProductSuccess = (data) => {

};

const deleteSelectedProductSuccess = () => {

};

const failure = (error) => {
  console.log(error);
};

module.exports = {
  getMyShoppingCartSuccess,
  getMyOrderSuccess,
  createSelectedProductsSuccess,
  updateSelectedProductSuccess,
  deleteSelectedProductSuccess,
  failure,
};
