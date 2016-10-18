'use strict';

const app = require ('../app');

const getOrders = function() {
  return $.ajax({
    url: app.host + '/orders',
    method: 'GET',
  });
};

const createOrder = () => {
  let data = {};
  data.order = {
    isComplete: false
  };
  console.log(data);
  return $.ajax({
    url: app.host + '/orders',
    method: 'POST',
    headers: {
      authorization: 'Token token=' + app.user.token
    },
    data: data
  });
};

const patchOrders = (data) => {
  return $.ajax({
    url: app.host + '/orders',
    method: 'PATCH',
    headers: {
      authorization: 'Token token=' + app.user.token
    },
    data: data,
  });
};

const deleteOrders = () => {
  return $.ajax({
    url: app.host + '/orders',
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
  createOrder,
  patchOrders,
  deleteOrders,
  getMyShoppingCart
};
