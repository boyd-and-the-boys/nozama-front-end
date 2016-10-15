'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
    .done (ui.signUpSuccess)
    .fail (ui.failure);
};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
    .done (ui.signInSuccess)
    .fail (ui.failure);
};

const onSignOut = function () {
  event.preventDefault();
  api.signOut()
    .done (ui.signOutSuccess)
    .fail (ui.failure);
};

const onChangePassword = function (event) {
  event.preventDefault();
  console.log('button clicked')
  let data = getFormFields(event.target);
  api.changePassword(data)
    .done (ui.changePasswordSuccess)
    .fail (ui.failure);
};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in-form').on('submit', onSignIn);
  $('#change-pwd-form').on('submit', onChangePassword);
  $('#sign-out').on('click', onSignOut);
};

module.exports = {
  addHandlers,
};
