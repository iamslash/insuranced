
var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connection;

// connect to database...
db.on('error', console.error);
db.once('open', function() {
    console.log("Connected to mongod server");
})
mongoose.connect('mongodb://localhost/ins');

var Book = require('./models/book');

app.use(bodyparser.urlencoded({ extended: true}));
app.use(bodyparser.json());

var port = process.env.PORT || 8080;

var router = require('./routes')(app, Book);

var server = app.listen(port, function() {
    console.log("Express server has started on port " + port)
})