const { Router: router } = require('express');

/**
 * Provide api for questions
 *
 *
 * GET /api/v1/questions/ - List
     @header
            Authorization: Bearer {token}
     @optionalQueryParameters
           search {String} - value to search
           limit {Number} - count of item to send
           skip {Number} - value to search
 *
 *
 * **/


module.exports = (models, { config }) => {
  const api = router();

  api.get('/', (req, res, next) => {
    res.status(200).send({ message: 'hello world' });
  });

  return api;
};