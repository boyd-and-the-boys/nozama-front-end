'use strict';

const app = require ('../app');

const getSelectedProducts = function() {
  return $.ajax({
    url: app.host + '/selected-products',
    method: 'GET',
  });
};

const postSelectedProducts = (data) => {
  return $.ajax({
    url: app.host + '/selected-products/',
    method: 'POST',
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

const deleteSelectedProducts = () => {
  return $.ajax({
    url: app.host + '/selected-products',
    method: 'DELETE',
    headers: {
      authorization: 'Token token=' + app.user.token,
      },
   });
 };

module.exports = {
  getSelectedProducts,
  postSelectedProducts,
  patchSelectedProducts,
  showSelectedProducts,
  deleteSelectedProducts
};
