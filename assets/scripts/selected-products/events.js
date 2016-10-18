'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

const onGetMyShoppingCart = function (event) {
  event.preventDefault();
  $('#shopping-cart').toggle();
  api.getMyShoppingCart()
    .done (ui.getMyShoppingCartSuccess)
    .fail (ui.failure);
};

const onCreateSelectedProduct = function (event) {
  event.preventDefault();
  let orderId = $('#shopping-cart').data('id');
  let data = getFormFields(event.target);
  data.selectedProduct._order = orderId;
  data.selectedProduct._product = $(event.target).parent().data('id');
  api.createSelectedProduct(data)
    .done (ui.createSelectedProductsSuccess)
    .fail (ui.failure);
};

// const onUpdateSelectedProduct = function (event) {
//   event.preventDefault();
//   let data = getFormFields(event.target);
//   api.patchSelectedProducts(data)
//     .done (ui.patchSelectedProductsSuccess)
//     .fail (ui.failure);
// };


const addHandlers = () => {
  $('.glyphicon-shopping-cart').on('click', onGetMyShoppingCart);
  $('#content').on('submit', '.select-product-form', onCreateSelectedProduct);
};

module.exports = {
  addHandlers,
};
