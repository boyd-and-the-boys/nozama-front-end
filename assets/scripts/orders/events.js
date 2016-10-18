'use strict';

// const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

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



const addHandlers = () => {

};

module.exports = {
  addHandlers,
  onCreateOrder,
  onGetOrders,
};
