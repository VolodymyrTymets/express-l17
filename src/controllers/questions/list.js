const list = ({ Question }, { config }) => async (req, res, next) => {
  try {
    const questions = await Question.find({});
    res.status(200).send({ questions });
  } catch (error) {
    next(error);
  }
};

module.exports= { list };
