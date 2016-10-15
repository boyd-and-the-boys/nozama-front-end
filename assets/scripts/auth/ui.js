'use strict';

const app = require ('../app');

const signUpSuccess = (data) => {
  app.user = data.user;
  console.log(data);
  $('#signUpModal').modal('hide');


};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(data);
  $('#signInModal').modal('hide');

};

const signOutSuccess = () => {
  app.user = null;
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
