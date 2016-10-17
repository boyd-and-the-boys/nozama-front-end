'use strict';

const app = require ('../app');

const getOrders = function() {
  return $.ajax({
    url: app.host + '/orders',
    method: 'GET',
  });
};

const postOrders = (data) => {
  return $.ajax({
    url: app.host + '/orders',
    method: 'POST',
    data: data,
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

module.exports = {
  getOrders,
  postOrders,
  patchOrders,
  deleteOrders
};
