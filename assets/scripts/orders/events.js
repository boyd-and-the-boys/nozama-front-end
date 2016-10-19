'use strict';

// const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');
const selProdApi = require('../selected-products/api.js');
const userApi = require('../auth/api.js');

const app = require('../app');

const onGetOrders = function (event) {
  event.preventDefault();
  api.getOrders(event)
    .done (ui.getOrdersSuccess)
    .fail (ui.failure);
};

const onCreateOrder = function () {
  let data = {};
  data.order = {
    isComplete: false
  };
  console.log(data);
  api.createOrder(data)
    .done (ui.createOrderSuccess)
    .fail (ui.failure);
};

const onDeleteOrder = function () {
  if (app.user.guest) {
    selProdApi.getMyShoppingCart()
      .done (function (data) {
        data.selectedProducts.forEach((selectedProduct) => {
          selProdApi.deleteSelectedProduct(selectedProduct._id)
            .fail(ui.failure);
        });
        api.deleteOrder()
          .done (function () {
            userApi.deleteUser()
              .done()
              .fail(ui.failure);
          })
          .fail(ui.failure);
    })
    .fail (ui.failure);
  }
};

const addHandlers = () => {
  $(window).on('beforeunload', onDeleteOrder);

};

module.exports = {
  addHandlers,
  onCreateOrder,
  onGetOrders,
};
