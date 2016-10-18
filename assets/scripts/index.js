'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

const authEvents = require('./auth/events.js');
const authApi = require('./auth/api.js');
const authUi = require('./auth/ui.js');
const productEvents = require('./products/events.js');
const orderEvents = require('./orders/events.js');
const orderApi = require('./orders/api.js');
const orderUi = require('./orders/ui.js');
const selectedProductsEvents = require('./selected-products/events.js');



// On document ready
$(() => {
  $('.user-dropdown').hide();
  authEvents.addHandlers();
  productEvents.onGetProducts();
  orderEvents.addHandlers();
  selectedProductsEvents.addHandlers();
  authApi.guestSignUp()
    .done (function (data) {
      authUi.guestSignUpSuccess(data);
      orderApi.createOrder()
        .done(orderUi.createOrderSuccess)
        .fail(orderUi.failure);
    })
    .fail (authUi.failure);

  // orderEvents.onCreateOrder();



});
