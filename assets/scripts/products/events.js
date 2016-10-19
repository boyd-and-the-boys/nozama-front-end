'use strict';

const api = require('./api');
const ui = require('./ui');

const onGetProducts = function () {
  api.getProducts()
    .done (ui.getProductsSuccess)
    .fail (ui.failure);
};

const onClickProduct = function () {
  $('.photo-modal').show();
};

const addHandlers = () => {
  $('#content').on('click', '.photo-small', onClickProduct);
};

module.exports = {
  addHandlers,
  onGetProducts,

};
