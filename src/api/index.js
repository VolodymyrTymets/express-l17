const express = require('express');

const { errorHandler } = require('../middleware');
// list of models here
const { Question } = require('../models/question');

// list of controllers here
const questions = require('../controllers/questions');

// combine models ino one object
const models = { Question };

const routersInit = config => {
  const router = express();

  // register api points
  router.use('/questions', questions(models, { config }));

  // catch api all errors
  router.use(errorHandler);
  return router;
};

module.exports = routersInit;