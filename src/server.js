var express = require('express');
var file_stream_rotator = require('file-stream-rotator');
var morgan = require('morgan');

var app = express();

app.set('port', 5000);

var log_directory = 'log';
var access_log_stream = file_stream_rotator.getStream({
    date_format: 'YYYYMMDD',
    filename: log_directory + '/access-%DATE%.log',
    frequency: 'daily',
    verbose: false
});

app.use(morgan('combined', { stream: access_log_stream }));
app.use(express.static('templates'));
app.use('/stylesheets', express.static('stylesheets'));
app.use('/scripts', express.static('scripts'));

app.listen(app.get('port'));
