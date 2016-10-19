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

const getMyOrder = function(orderId) {
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

const updateSelectedProduct = (data) => {
  return $.ajax({
    url: app.host + '/selected-products/' + data.selProductId,
    method: 'PATCH',
    headers: {
      authorization: 'Token token=' + app.user.token
    },
    data: data,
  });
};

const deleteSelectedProduct = (selProductId) => {
  return $.ajax({
    url: app.host + '/selected-products/' + selProductId,
    method: 'DELETE',
    headers: {
      authorization: 'Token token=' + app.user.token,
      },
   });
 };

module.exports = {
  getMyShoppingCart,
  getMyOrder,
  createSelectedProduct,
  updateSelectedProduct,
  deleteSelectedProduct,
};
