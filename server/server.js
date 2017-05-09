// DEPENDENCIES
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');

// API ROUTE HANDLER
const routes = require('./routes.js');

// START EXPRESS AND MONGODB
const app = express();
mongoose.connect('mongodb://localhost/verb');

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('combined'));

// STATIC FILES
app.use('/public', express.static(path.join(__dirname, '/../client')));
app.use('/bundle', express.static(path.join(__dirname, '/../dist')));

// ROUTING
app.use('/api', routes);

// CATCH 404 ERRORS
app.use((req, res, next) => {
  const err = new Error('Oops! We couldn\'t find that!');
  err.status = 404;
  next(err);
});

// LISTEN
const port = process.env.PORT || 2201;
app.listen(port, () => {
  console.log('The server is listening on port ', port);
});