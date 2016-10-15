'use strict';

const app = require ('../app');

const signUp = (data) => {
  return $.ajax ({
      url: app.host + '/sign-up',
      method: 'POST',
      data: data,
  });
};

const signIn = (data) => {
  return $.ajax ({
      url: app.host + '/sign-in',
      method: 'POST',
      data: data,
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

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
};
