'use strict';

const loadOrders = require ('../../templates/orders.handlebars');

const getOrdersSuccess = (data) => {
  console.log(data);
  $('#content').html(loadOrders(data));
};

const createOrderSuccess = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.log(error);
};

module.exports = {
  getOrdersSuccess,
  createOrderSuccess,
  failure,
};
