'use strict';

const app = require ('../app');

const getOrders = function() {
  return $.ajax({
    url: app.host + '/orders',
    method: 'GET',
  });
};

const getUserOrders = function() {
  return $.ajax({
    url: app.host + '/my-orders',
    method: 'GET',
    headers: {
      authorization: 'Token token=' + app.user.token
    },
  });
};

const createOrder = () => {
  let data = {};
  data.order = {
    isComplete: false
  };
  return $.ajax({
    url: app.host + '/orders',
    method: 'POST',
    headers: {
      authorization: 'Token token=' + app.user.token
    },
    data: data
  });
};

const updateOrder = (data) => {
  return $.ajax({
    url: app.host + '/orders/' + $('#shopping-cart').data('id'),
    method: 'PATCH',
    headers: {
      authorization: 'Token token=' + app.user.token
    },
    data: data,
  });
};

const deleteOrder = () => {
  let orderId = $('#shopping-cart').data('id');
  return $.ajax({
    url: app.host + '/orders/' + orderId,
    method: 'DELETE',
    headers: {
      authorization: 'Token token=' + app.user.token,
      },
   });
 };

 const getMyShoppingCart = () => {
   return $.ajax({
     url: app.host + '/my-shopping-cart',
     method: 'GET',
     headers: {
       authorization: 'Token token=' + app.user.token,
       },
    });
 };

module.exports = {
  getOrders,
  getUserOrders,
  createOrder,
  updateOrder,
  deleteOrder,
  getMyShoppingCart
};
