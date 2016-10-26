var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.use('/scripts', express.static(__dirname + '/../scripts'));

app.listen(8001, function () {
    console.log('Static resources server One listening on port %d!', this.address().port);
});