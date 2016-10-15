'use strict';

const app = require ('../app');

const getSelectedProducts = function() {
  return $.ajax({
    url: app.host + '/selected-products',
    method: 'GET',
  });
};

module.exports = {
  getSelectedProducts,
};
