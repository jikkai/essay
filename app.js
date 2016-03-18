var express = require('express');
var path    = require('path');
var md      = require("node-markdown").Markdown;
var app     = express();

app.use(express.static(path.join(__dirname, '/')));

var html = md("**markdown** string");


app.listen(5000, function () {
    console.log('http://localhost:5000');
});
