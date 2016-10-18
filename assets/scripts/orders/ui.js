'use strict';

const loadOrders = require ('../../templates/orders.handlebars');

const getOrdersSuccess = (data) => {
  console.log(data);
  $('#content').html(loadOrders(data));
};

const createOrderSuccess = (data) => {
  console.log(data);
  $('#shopping-cart').data('id', data.order._id);
  console.log($('#shopping-cart').data('id'));
};

const failure = (error) => {
  console.log(error);
};

module.exports = {
  getOrdersSuccess,
  createOrderSuccess,
  failure,
};
