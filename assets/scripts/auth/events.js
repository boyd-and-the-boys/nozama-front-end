'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');
const app = require('../app');
const orderApi = require('../orders/api');
const orderUi = require('../orders/ui');

const onLogIn = function (event) {
  event.preventDefault();
  console.log("button clicked");
  $('#log-in-page').show();
  $('#content').hide();
};

const onSignUp = function (event) {
  event.preventDefault();
  let form = event.target;

  let signUpData = getFormFields(form);

  api.userSignUp(signUpData)
  .done(ui.userSignUpSuccess)
  .fail(ui.failure);
};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  orderApi.deleteOrder()
    .done (function () {
      api.deleteUser()
        .done (function () {
          api.signIn(data)
            .done (function (data) {
              ui.signInSuccess(data);
              orderApi.getMyShoppingCart()
                .done (function (data) {
                  if (data.orders.length > 0) {
                    $('#shopping-cart').data('id', data.orders[0]._id);
                  }
                })
                .fail (ui.failure);
            })
            .fail (ui.failure);
        })
        .fail (ui.failure);
    })
    .fail (ui.failure);
};

const onSignOut = function () {
  event.preventDefault();
  api.signOut()
    .done (function () {
      ui.signOutSuccess();
      api.guestSignUp()
        .done ( function (data) {
          ui.guestSignUpSuccess(data);
          orderApi.createOrder()
            .done(orderUi.createOrderSuccess)
            .fail(orderUi.failure);
          })
        .fail (ui.failure);
      })
    .fail (ui.failure);
};

const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
    .done (ui.changePasswordSuccess)
    .fail (ui.failure);
};

const addHandlers = () => {
  $('.log-in-button').on('click', onLogIn);
  $('#sign-up-form').on('submit', onSignUp);
  $('#sign-in-form').on('submit', onSignIn);
  $('#change-pwd-form').on('submit', onChangePassword);
  $('.log-out-button').on('click', onSignOut);
};

module.exports = {
  addHandlers,
};
