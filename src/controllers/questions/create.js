const { NotAcceptable } = require('rest-api-errors');
const { sendOne } = require('../../middleware');
const _ = require('lodash');

const create = ({ Question }, { config }) => async (req, res, next) => {
  try {
    const question = new Question();
    if (!req.body.title) {
      throw new NotAcceptable(405, 'Should by title}');
    }
    _.extend(question, req.body);
    await question.save();

    return sendOne(res, { question });
  } catch (error) {
    next(error);
  }
};

module.exports= { create };
