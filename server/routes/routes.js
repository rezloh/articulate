const express = require('express');
const router = express.Router();
const article = require('../../db/controllers/article.js');

// SERVES THE DETAILS FOR AN ARTICLE
router.get('/:id', (req, res, next) => {
  article.getArticle(req.params.id)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});
// GETS ALL ARTICLES
router.get('/', (req, res, next) => {
  article.getAllArticles()
    .sort('-createdAt')
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        res.status(500).send(err);
      });
});
// ADDS A NEW ARTICLE TO THE DATABASE
router.post('/', (req, res, next) => {
  article.insertArticle(req.body)
    .then(response => {
      res.status(201).send(response);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});
// UPDATES AN ARTICLE
router.put('/:id', (req, res, next) => {
  article.updateArticle(req.params.id, req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});
// DELETES AN ARTICLE
router.delete('/:id', (req, res, next) => {
  article.deleteArticle(req.params.id)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

module.exports = router;
