const _ = require('lodash');

const update = ({ Question }, { config }) => async (req, res, next) => {
  const { _id } = req.params;
  try {
    const question = await Question.findOne({ _id });
    _.extend(question, req.body);
    await question.save();
    res.status(200).send({ question });
  } catch (error) {
    next(error);
  }
};

module.exports= { update };
