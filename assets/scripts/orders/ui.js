'use strict';

const loadOrders = require ('../../templates/orders.handlebars');

const getOrdersSuccess = (data) => {
  $('#content').html(loadOrders(data));
};

const getUserOrdersSuccess = (data) => {
  console.log(data);
  $('#content').hide();
  $('#user-page').html(loadOrders(data));
  $('#user-page').show();
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
  getUserOrdersSuccess,
  createOrderSuccess,
  updateOrderSuccess,
  failure,
};
