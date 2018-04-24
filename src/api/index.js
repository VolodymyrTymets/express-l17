const express = require('express');

// const { errorHandler } = require('../middleware/index');
// const { * } = require('../models/*');


// const * = require('../controllers/*');
//
// const models = { *, * };

const routersInit = config => {
  const router = express();

  //router.use('/test', auth(models, { config }));

  //router.use(errorHandler);
  return router;
};

module.exports = routersInit;