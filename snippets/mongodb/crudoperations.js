var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

// Read Operations Overview
var findRestaurants = function(db, callback) {
   var cursor = db.collection('restaurants').find(
     { "borough": "Queens" },
     { "_id": 0, "grades": 1 , "restaurant_id": 1 } ) ;
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         callback();
      }
   });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  findRestaurants(db, function() {
      db.close();
  });
});
