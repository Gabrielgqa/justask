const express = require('express');
const baseController = require('./controllers/BaseController');

const routes = express.Router();

routes.get('/', baseController.index);

module.exports = routes;