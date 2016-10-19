'use strict';

const api = require('./api');
const ui = require('./ui');

const onGetProducts = function () {
  api.getProducts()
    .done (ui.getProductsSuccess)
    .fail (ui.failure);
};

const onClickProduct = function (event) {
  event.preventDefault();

  $(event.target).parent().find('.photo-modal').first().modal('show');
};

const addHandlers = () => {
  $('#content').on('click', '.photo-small', onClickProduct);
};

module.exports = {
  addHandlers,
  onGetProducts,

};
