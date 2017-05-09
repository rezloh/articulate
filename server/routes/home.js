const express = require('express');
const routers = express.Router();
const path = require('path');

// SERVES STATIC HOMEPAGE
router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});
