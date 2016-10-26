var express = require('express');
var app = express();

app.use(function(req, res, next) {

    // Access-Control-Allow-Origin only accepts a string, so to provide multiple allowed origins for requests,
    // check incoming request origin against accepted list and set Access-Control-Allow-Origin to that value if it's found.
    // Setting this value to '*' will allow requests from any domain, which is insecure.

    var allowedOrigins = ['http://mydomain.com:8001', 'http://mydomain.com:8002'];

    var acceptedOrigin = allowedOrigins.indexOf(req.headers.origin) >= 0 ? req.headers.origin : allowedOrigins[0];
    res.header("Access-Control-Allow-Origin", acceptedOrigin);
    next();
});

app.get('/fruit', function (req, res) {
    res.status(200).send({
        data: ['apple', 'pear', 'mango', 'berry', 'peach']
    });
});

app.get('/vegetable', function (req, res) {
    res.status(200).send({
        data: ['tomato', 'zucchini', 'asparagus', 'carrot', 'beet']
    });
});

app.listen(8000, function () {
    console.log('Api listening on port %d!', this.address().port);
});