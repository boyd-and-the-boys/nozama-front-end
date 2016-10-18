'use strict';

const app = require ('../app');

const signUpSuccess = (data) => {
  app.user = data.user;
  console.log(data);

};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(data);
  $('#log-in-page').hide();
  $('#content').show();
  $('.user-dropdown').show();
  $('.log-in-button').hide();
  $('.change-pwd-button').show();
  $('.my-orders-button').show();
  $('.log-out-button').show();
};

const signOutSuccess = () => {
  app.user = null;
  $('.log-in-button').show();
  $('.log-out-button').hide();
  $('.change-pwd-button').hide();
};

const changePasswordSuccess = () => {
  $('#changePwdModal').modal('hide');

};

const failure = (error) => {
};


module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  failure,
};
