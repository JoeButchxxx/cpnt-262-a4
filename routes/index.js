const express = require('express');
const config = require('../config');
const router = express.Router();
const apiRoute = require('./api/v0');
const dayJS = require('dayjs');

router.use((request, response, next) => {
  response.locals = config
  next()
})

router.get('/', (request, response) => {
  response.render('pages/index', { pageTitle: 'Home', dayJS })
})

router.get('/login', (request, response) => {
  response.render('pages/login', { pageTitle: 'Login', dayJS })
})

router.get('/register', (request, response) => {
  response.render('pages/register', { pageTitle: 'register', dayJS })
})

router.get('/', function (request, response) {
  response.render('pages/404', { pageTitle: "404 Page" });
})


router.use('/api/v0', apiRoute);
module.exports = router