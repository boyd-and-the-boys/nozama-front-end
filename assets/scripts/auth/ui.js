'use strict';

const app = require ('../app');
const loadProducts = require ('../../templates/products.handlebars');


const signUpSuccess = (data) => {
  app.user = data.user;
  console.log(data);

};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(data);
  $('#log-in-page').hide();
  $('#content').html(loadProducts(data));
  $('.log-in-button').hide();
  $('.log-out-button').show();
  $('.change-pwd-button').show();
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
