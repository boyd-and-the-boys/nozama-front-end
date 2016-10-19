'use strict';

const loadOrders = require ('../../templates/orders.handlebars');

const getOrdersSuccess = (data) => {
  $('#content').html(loadOrders(data));
};

const createOrderSuccess = (data) => {
  $('#shopping-cart').data('id', data.order._id);
  $('#submitPaymentModal').modal('hide');
};

const updateOrderSuccess = (data) => {
  $('#submitPaymentModal').modal('hide');
};

const failure = (error) => {
  console.log(error);
};

module.exports = {
  getOrdersSuccess,
  createOrderSuccess,
  updateOrderSuccess,
  failure,
};
