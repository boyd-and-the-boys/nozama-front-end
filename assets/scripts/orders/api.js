'use strict';

const app = require ('../app');

const getOrders = function() {
  return $.ajax({
    url: app.host + '/orders',
    method: 'GET',
  });
};

module.exports = {
  getOrders,
};
