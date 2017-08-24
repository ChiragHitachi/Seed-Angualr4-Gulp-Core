(function () {
    'use strict';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.set('views', path.join(__dirname, 'wwwroot'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

app.use( (req, res, next) => {
    console.log('serving => ' + path.basename(req.url));
    next();
});

app.use(express.static(path.join(__dirname, 'wwwroot')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/wwwroot/index.html'));
});

app.listen('3000', () => {
    console.log('server listening at 3000');
});

})();