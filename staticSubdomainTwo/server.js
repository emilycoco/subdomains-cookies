var express = require('express');
var app = express();

app.use(express.static(__dirname));
app.use('/scripts', express.static(__dirname + '/../scripts'));

app.listen(8002, function () {
    console.log('Static resources server Two listening on port %d!', this.address().port);
});