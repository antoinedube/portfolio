var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('combined'));

app.use(express.static('templates'));
app.use('/stylesheets', express.static('stylesheets'));

app.listen(8000);
