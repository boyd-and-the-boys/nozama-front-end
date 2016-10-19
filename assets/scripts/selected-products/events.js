'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');
const shoppingCart = require('./shopping-cart');


const onGetMyShoppingCart = function (event) {
  event.preventDefault();
  $('.clear-div').show();
  $('#shopping-cart').toggle();
  api.getMyShoppingCart()
    .done (ui.getMyShoppingCartSuccess)
    .fail (ui.failure);
};

const onCreateSelectedProduct = function (event) {
  event.preventDefault();
  let orderId = $('#shopping-cart').data('id');
  let productId = $(event.target).parent().data('id');
  let data = getFormFields(event.target);
  data.selectedProduct._order = orderId;
  data.selectedProduct._product = productId;
  api.createSelectedProduct(data)
    .done (ui.createSelectedProductsSuccess)
    .fail (ui.failure);
};

const onUpdateSelectedProduct = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  let selproductId = $(event.target).parent().data('id');
  data.selProductId = selproductId;
  api.updateSelectedProduct(data)
    .done (function (data) {
      ui.updateSelectedProductSuccess(data);
      shoppingCart.onRefreshShoppingCart();
    })
    .fail (ui.failure);
};

const onDeleteSelectedProduct = function (event) {
  event.preventDefault();
  let selproductId = $(event.target).parent().data('id');
  api.deleteSelectedProduct(selproductId)
    .done (function () {
      ui.deleteSelectedProductSuccess();
      shoppingCart.onRefreshShoppingCart();
    })
    .fail (ui.failure);
};

const hideShoppingCart = function () {
  if($('#shopping-cart').is(":visible")) {
        $('#shopping-cart').hide();
  }
};


const addHandlers = () => {
  $('.glyphicon-shopping-cart').on('click', onGetMyShoppingCart);
  $('#content').on('submit', '.select-product-form', onCreateSelectedProduct);
  $('#shopping-cart').on('submit', '.update-selproduct-form', onUpdateSelectedProduct);
  $('#shopping-cart').on('click', '.remove', onDeleteSelectedProduct);
  $('.div').on('click', hideShoppingCart);

};

module.exports = {
  addHandlers,
};
