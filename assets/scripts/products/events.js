'use strict';

// const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

const onGetProducts = function (event) {
  // event.preventDefault();
  api.getProducts(event)
    .done (ui.getProductsSuccess)
    .fail (ui.failure);
};

// const onGetSingleTrip = function (event) {
//   event.preventDefault();
//   let tripId = $(this).data('id');
//   api.getSingleTrip(tripId)
//     .done (ui.getSingleTripSuccess)
//     .fail (ui.failure);
// };

const addHandlers = () => {
};

module.exports = {
  addHandlers,
  onGetProducts,
};
