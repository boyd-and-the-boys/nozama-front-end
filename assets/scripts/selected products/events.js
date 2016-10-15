'use strict';

// const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

const onGetSelectedProducts = function (event) {
  // event.preventDefault();
  api.getSelectedProducts(event)
    .done (ui.getSelectedProductsSuccess)
    .fail (ui.failure);
};

const addHandlers = () => {
};

module.exports = {
  addHandlers,
  onGetSelectedProducts,
};
