'use strict';

const api = require('./api');
const ui = require('./ui');

const onGetProducts = function () {
  api.getProducts()
    .done (ui.getProductsSuccess)
    .fail (ui.failure);
};

const onBackToProducts = function (event) {
  event.preventDefault();
  $('#about-page').hide();
  $('#content').show();
};

const onClickProduct = function (event) {
  event.preventDefault();
  $(event.target).parent().find('.photo-modal').first().modal('show');
};

const addHandlers = () => {
  $('#content').on('click', '.photo-small', onClickProduct);
  $('#about-page').on('click', '#back-products-button', onBackToProducts);

};

module.exports = {
  addHandlers,
  onGetProducts,

};
