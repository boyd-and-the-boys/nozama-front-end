'use strict';

const app = require ('../app');

const guestSignUp = () => {
  return $.ajax ({
    url: app.host + '/sign-up',
    method: 'POST'
  });
};

const userSignUp = (data) => {
  return $.ajax ({
    url: app.host + '/sign-up',
    method: 'PATCH',
    headers: {
      authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const signIn = (data, textStatus, jqXHR, signUpData) => {
  return $.ajax({
    url: app.host + '/sign-in',
    method: 'POST',
    data: signUpData ? signUpData : data
  });
};

const signOut = () => {
  return $.ajax({
      url: app.host + '/sign-out/' + app.user._id,
      method: 'DELETE',
      headers: {
        authorization: 'Token token=' + app.user.token,
      },
  });
};

const changePassword = (data) => {
  return $.ajax({
    url: app.host + '/change-password/' + app.user._id,
    method: 'PATCH',
    headers: {
      authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const deleteUser = () => {
  return $.ajax({
    url: app.host + '/users/' + app.user._id,
    method: 'DELETE',
    headers: {
      authorization: 'Token token=' + app.user.token,
      },
   });
 };

module.exports = {
  guestSignUp,
  userSignUp,
  signIn,
  signOut,
  changePassword,
  deleteUser
};
