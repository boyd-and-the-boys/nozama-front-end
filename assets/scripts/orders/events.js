'use strict';

// const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');
const selProdApi = require('../selected-products/api.js');
const userApi = require('../auth/api.js');

const app = require('../app');

const onGetOrders = function (event) {
  event.preventDefault();
  api.getOrders(event)
    .done (ui.getOrdersSuccess)
    .fail (ui.failure);
};

const onGetUserOrders = function (event) {
  event.preventDefault();
  api.getUserOrders()
    .done(ui.getUserOrdersSuccess)
    .fail(ui.failure);
};

const onCreateOrder = function (event) {
  event.preventDefault();
  api.createOrder()
    .done (ui.createOrderSuccess)
    .fail (ui.failure);
};

const onDeleteOrder = function () {
  if (app.user.guest) {
    selProdApi.getMyShoppingCart()
      .done (function (data) {
        data.selectedProducts.forEach((selectedProduct) => {
          selProdApi.deleteSelectedProduct(selectedProduct._id)
            .fail(ui.failure);
        });
        api.deleteOrder()
          .done (function () {
            userApi.deleteUser()
              .done()
              .fail(ui.failure);
          })
          .fail(ui.failure);
    })
    .fail (ui.failure);
  }
};

const onPaymentSubmit = (event) => {
  event.preventDefault();
  // Remove event handler from #payment-form to prevent multiple clicks
  $('#payment-form').off();

  // Stripe is available due to script at bottom of index.html
  Stripe.setPublishableKey('pk_test_2saYaU7cKBb0eV7JGudVl4Jo');

  Stripe.card.createToken({
    number: $('#card-number').val(),
    cvc: $('#card-cvc').val(),
    exp_month: $('#card-exp-month').val(),
    exp_year: $('#card-exp-year').val()
  },
  function (status, response) {
    if (response.error) {
      $('#payment-errors').html(response.error.message);
      $('#payment-form').on('submit', onPaymentSubmit);
    } else {
      let orderData = {
        order: {
          stripeToken: response.id,
          isComplete: true,
          dateOrdered: new Date()
        }
      };
      api.updateOrder(orderData)
        .done(function () {
          api.createOrder()
            .done(function (order) {
              ui.createOrderSuccess(order);
              $('#payment-form').on('submit', onPaymentSubmit);
            })
            .fail(ui.failure);
        })
        .fail(ui.failure);
    }
  }
);
return false;
};

const addHandlers = () => {
  $(window).on('beforeunload', onDeleteOrder);
  $('#payment-form').on('submit', onPaymentSubmit);
  $('#my-orders-button').on('click', onGetUserOrders);
};

module.exports = {
  addHandlers,
  onCreateOrder,
  onGetOrders,
};
