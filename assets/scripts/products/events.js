'use strict';

// const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

const onGetProducts = function () {
  api.getProducts()
    .done (ui.getProductsSuccess)
    .fail (ui.failure);
};

const addHandlers = () => {

};

module.exports = {
  addHandlers,
  onGetProducts,
};
