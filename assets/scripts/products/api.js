'use strict';

const app = require ('../app');

const getProducts = function() {
  return $.ajax({
    url: app.host + '/products',
    method: 'GET',
  });
};

module.exports = {
  getProducts,
};
