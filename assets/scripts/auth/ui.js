'use strict';

const app = require ('../app');

const userSignUpSuccess = () => {
  // app.user.email = aldkfjalkdf
  app.user.guest = false;
  console.log("Success");
  $('#log-in-page').hide();
  $('#content').show();
  $('.user-dropdown').show();
  $('.log-in-button').hide();
  $('.change-pwd-button').show();
  $('.my-orders-button').show();
  $('.log-out-button').show();
};

const guestSignUpSuccess = (data) => {
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
  $('.log-in-button').show();
  $('.log-out-button').hide();
  $('.change-pwd-button').hide();
};

const changePasswordSuccess = () => {
  $('#changePwdModal').modal('hide');

};

const failure = (error) => {
  console.error(error);
};


module.exports = {
  userSignUpSuccess,
  guestSignUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  failure,
};
