const articleModel = require('../models/article.js');

exports.getArticle = (id) => {
  return articleModel.findOne({ _id: id });
};

exports.insertArticle = (article) => {
  return articleModel.create(article);
};

exports.updateArticle = (data) => {
  return articleModel.findOneAndUpdate({ _id: data.id }, { $set: {
    title: data.title,
    body: data.body
  }
  });
};

exports.deleteArticle = (id) => {
  return articleModel.findByIdAndRemove({ _id: id });
};
