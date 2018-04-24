const mongoose = require('mongoose');
const { schema } = require('./schema');
const Question = mongoose.model('Question', schema);


module.exports = { Question };