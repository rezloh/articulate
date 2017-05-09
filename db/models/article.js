const mongoose = require('mongoose');
const schema = mongoose.Schema;

const articleSchema = new Schema({
  title: String,
  body: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.Model('Article', articleSchema);
