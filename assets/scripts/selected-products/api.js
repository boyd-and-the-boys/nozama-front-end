'use strict';

const app = require ('../app');
const getMyShoppingCart = function() {
  let orderId = $('#shopping-cart').data('id');
  return $.ajax({
    url: app.host + '/order-products',
    method: 'GET',
    headers: {
        authorization: 'Token token=' + app.user.token,
      },
    data : {
      selectedProduct: {
        _order : orderId,
      }
    }
  });
};

const createSelectedProduct = (data) => {
  return $.ajax({
    url: app.host + '/selected-products',
    method: 'POST',
    headers: {
      authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const patchSelectedProducts = (data) => {
  return $.ajax({
    url: app.host + '/selected-products/',
    method: 'PATCH',
    headers: {
      authorization: 'Token token=' + app.user.token
    },
    data: data,
  });
};

const showSelectedProducts = (data) => {
  return $.ajax({
    url: app.host + '/selected-products/',
    method: 'SHOW',
    headers: {
      authorization: 'Token token=' + app.user.token
    },
    data: data,
  });
};

const deleteSelectedProduct = (id) => {
  return $.ajax({
    url: app.host + '/selected-products/' + id,
    method: 'DELETE',
    headers: {
      authorization: 'Token token=' + app.user.token,
      },
   });
 };

module.exports = {
  getMyShoppingCart,
  createSelectedProduct,
  patchSelectedProducts,
  showSelectedProducts,
  deleteSelectedProduct
};
