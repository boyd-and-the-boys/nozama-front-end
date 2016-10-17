'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

const onGetSelectedProducts = function (event) {
  event.preventDefault();
  api.getSelectedProducts(event)
    .done (ui.getSelectedProductsSuccess)
    .fail (ui.failure);
};

const onPostSelectedProducts = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.postSelectedProducts(data)
    .done (ui.postSelectedProductsSuccess)
    .fail (ui.failure);
};

const onPatchSelectedProducts = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.patchSelectedProducts(data)
    .done (ui.patchSelectedProductsSuccess)
    .fail (ui.failure);
};

const onDeleteSelectedProducts = () => {
  event.preventDefault();
  api.deleteSelectedProducts()
    .done (ui.deleteSelectedProductsSuccess)
    .fail (ui.failure);
};

const addHandlers = () => {
};

module.exports = {
  addHandlers,
  onGetSelectedProducts,
  onPostSelectedProducts,
  onPatchSelectedProducts,
  onDeleteSelectedProducts
};
