const mongoose = require('mongoose');

class MongoManager {
  constructor (config) {
    this._config = config;
  }
  getMongoUrl() {
    return this._config.MONGODB_URI;
  }
  connect () {
    return mongoose.connect(this.getMongoUrl());
  }
}

const mongoManager = new MongoManager();

module.exports = { mongoManager };