const get = ({ Question }, { config }) => async (req, res, next) => {
  const { _id } = req.params;
  try {
    const question = await Question.findOne({ _id });
    res.status(200).send({ question });
  } catch (error) {
    next(error);
  }
};

module.exports= { get };
