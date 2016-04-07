var express = require('express');
var morgan = require('morgan');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(morgan('combined'));

app.use(express.static('templates'));
app.use('/stylesheets', express.static('stylesheets'));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port: ', app.get('port'));
});
