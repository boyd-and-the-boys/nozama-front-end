'use strict';

const api = require('./api');
const ui = require('./ui');

const onRefreshShoppingCart = function () {
  api.getMyShoppingCart()
    .done (ui.getMyShoppingCartSuccess)
    .fail (ui.failure);
};


module.exports = {
  onRefreshShoppingCart,
};
