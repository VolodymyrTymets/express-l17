const _ = require('lodash');

const create = ({ Question }, { config }) => async (req, res, next) => {
  try {
    const question = new Question();
    _.extend(question, req.body);
    await question.save();
    res.status(200).send({ question });
  } catch (error) {
    next(error);
  }
};

module.exports= { create };
