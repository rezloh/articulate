const articleModel = require('../models/article.js');

// RETRIEVE AN ARTICLE
exports.getArticle = (id) => {
  return articleModel.findOne({ _id: id });
};
// INSERT A NEW ARTICLE
exports.insertArticle = (article) => {
  return articleModel.create(article);
};
// UPDATE AN EXISTING ARTICLE
exports.updateArticle = (id, data) => {
  return articleModel.findOneAndUpdate({ _id: id }, { $set: {
    title: data.title,
    body: data.body
  }
  });
};
// REMOVE AND ARTICLE
exports.deleteArticle = (id) => {
  return articleModel.findByIdAndRemove({ _id: id });
};
