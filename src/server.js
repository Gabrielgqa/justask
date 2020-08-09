const express = require('express');
const server = express();
const routes = require('./routes');

const nunjucks = require('nunjucks');

nunjucks.configure('src/views',{
    express: server,
    noCache: true,
});

server
.use(express.urlencoded({ extended: true }))
.use(express.static("public"))
.use(routes)
.listen(5500);

