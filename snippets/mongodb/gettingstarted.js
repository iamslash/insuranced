var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

// * Insert Data

// ** Insert a Document
// var insertDocument = function(db, callback) {
//    db.collection('restaurants').insertOne( {
//       "address" : {
//          "street" : "2 Avenue",
//          "zipcode" : "10075",
//          "building" : "1480",
//          "coord" : [ -73.9557413, 40.7720266 ]
//       },
//       "borough" : "Manhattan",
//       "cuisine" : "Italian",
//       "grades" : [
//          {
//             "date" : new Date("2014-10-01T00:00:00Z"),
//             "grade" : "A",
//             "score" : 11
//          },
//          {
//             "date" : new Date("2014-01-16T00:00:00Z"),
//             "grade" : "B",
//             "score" : 17
//          }
//       ],
//       "name" : "Vella",
//       "restaurant_id" : "41704620"
//    }, function(err, result) {
//     assert.equal(err, null);
//     console.log("Inserted a document into the restaurants collection.");
//     callback();
//   });
// };

// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   insertDocument(db, function() {
//       db.close();
//   });
// });

// * Find or Query Data

// ** Query for All Documents in a Collection
// var findRestaurants = function(db, callback) {
//    var cursor = db.collection('restaurants').find( );
//    cursor.each(function(err, doc) {
//       assert.equal(err, null);
//       if (doc != null) {
//          console.dir(doc);
//       } else {
//          callback();
//       }
//    });
// };

// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   findRestaurants(db, function() {
//       db.close();
//   });
// });

// // Query by a Top Level Field
// var findRestaurants = function(db, callback) {
//    var cursor =db.collection('restaurants').find( { "borough": "Manhattan" } );
//    cursor.each(function(err, doc) {
//       assert.equal(err, null);
//       if (doc != null) {
//          console.dir(doc);
//       } else {
//          callback();
//       }
//    });
// };

// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   findRestaurants(db, function() {
//       db.close();
//   });
// });


// // Query for All Documents in a Collection¶
// var findRestaurants = function(db, callback) {
//    var cursor = db.collection('restaurants').find( { "grades.grade": "B" } );
//    cursor.each(function(err, doc) {
//       assert.equal(err, null);
//       if (doc != null) {
//          console.dir(doc);
//       } else {
//          callback();
//       }
//    });
// };

// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);

//   findRestaurants(db, function() {
//       db.close();
//   });
// });

/////////////////////////////////////////
//** Specify Conditions with Operators

// // Greater Than Operator ($gt)
// var findRestaurants = function(db, callback) {
//    var cursor =db.collection('restaurants').find( { "grades.score": { $gt: 30 } } );
//    cursor.each(function(err, doc) {
//       assert.equal(err, null);
//       if (doc != null) {
//          console.dir(doc);
//       } else {
//          callback();
//       }
//    });
// };

// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);

//   findRestaurants(db, function() {
//       db.close();
//   });
// });

// // Less Than Operator ($lt)
// var findRestaurants = function(db, callback) {
//    var cursor = db.collection('restaurants').find( { "grades.score": { $lt: 10 } } );
//    cursor.each(function(err, doc) {
//       assert.equal(err, null);
//       if (doc != null) {
//          console.dir(doc);
//       } else {
//          callback();
//       }
//    });
// };

// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);

//   findRestaurants(db, function() {
//       db.close();
//   });
// });

/////////////////////////////////////////
// Combine Conditions


// // Logical AND
// var findRestaurants = function(db, callback) {
//    var cursor = db.collection('restaurants').find(
//      { "cuisine": "Italian", "address.zipcode": "10075" }
//    );
//    cursor.each(function(err, doc) {
//       assert.equal(err, null);
//       if (doc != null) {
//          console.dir(doc);
//       } else {
//          callback();
//       }
//    });
// };

// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);

//   findRestaurants(db, function() {
//       db.close();
//   });
// });



// // Logical OR
// var findRestaurants = function(db, callback) {
//    var cursor =db.collection('restaurants').find(
//        { $or: [ { "cuisine": "Italian" }, { "address.zipcode": "10075" } ] }
//    );
//    cursor.each(function(err, doc) {
//       assert.equal(err, null);
//       if (doc != null) {
//          console.dir(doc);
//       } else {
//          callback();
//       }
//    });
// };

// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);

//   findRestaurants(db, function() {
//       db.close();
//   });
// });


/////////////////////////////////////////
// ** Sort Query Results

// var findRestaurants = function(db, callback) {
//    var cursor = db.collection('restaurants').find().sort(
//      { "borough": 1, "address.zipcode": 1 } );
//    cursor.each(function(err, doc) {
//       assert.equal(err, null);
//       if (doc != null) {
//          console.dir(doc);
//       } else {
//          callback();
//       }
//    });
// };

// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);

//   findRestaurants(db, function() {
//       db.close();
//   });
// });

// * Update Data

// ** Update Specific Fields

// // Update Top-Level Fields
// var updateRestaurants = function(db, callback) {
//   db.collection('restaurants').updateOne(
//     { "name" : "Juni" },
//     {
//       $set: { "cuisine": "American (New)" },
//       $currentDate: { "lastModified": true }
//     }, function(err, results) {
//          console.log(results);
//          callback();
//        });
// };

// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);

//   updateRestaurants(db, function() {
//       db.close();
//   });
// });

// // Update an Embedded Field

// var updateRestaurants = function(db, callback) {
//    db.collection('restaurants').updateOne(
//       { "restaurant_id" : "41156888" },
//       { $set: { "address.street": "East 31st Street" } },
//       function(err, results) {
//         console.log(results);
//         callback();
//    });
// };

// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);

//   updateRestaurants(db, function() {
//       db.close();
//   });
// });


// // Update Multiple Documents
// var updateRestaurants = function(db, callback) {
//    db.collection('restaurants').updateMany(
//       { "address.zipcode": "10016", cuisine: "Other" },
//       {
//         $set: { cuisine: "Category To Be Determined" },
//         $currentDate: { "lastModified": true }
//       }
//       ,
//       function(err, results) {
//         console.log(results);
//         callback();
//    });
// };

// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);

//   updateRestaurants(db, function() {
//       db.close();
//   });
// });


// // Replace a Document
// var updateRestaurants = function(db, callback) {
//    db.collection('restaurants').replaceOne(
//       { "restaurant_id" : "41704620" },
//       {
//         "name" : "Vella 2",
//         "address" : {
//            "coord" : [ -73.9557413, 40.7720266 ],
//            "building" : "1480",
//            "street" : "2 Avenue",
//            "zipcode" : "10075"
//         }
//       },
//       function(err, results) {
//         console.log(results);
//         callback();
//    });
// };

// var findRestaurants = function(db, callback) {
//   var cursor = db.collection('restaurants').find( { "restaurant_id": "41704620" } );
//   cursor.each(function(err, doc) {
//     assert.equal(err, null);
//     if (doc != null) {
//       console.dir(doc);
//     } else {
//       callback();
//     }
//   });
// };


// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);

//   updateRestaurants(db, function() {
//       db.close();
//   });

//   findRestaurants(db, function() {
//     db.close();
//   });
// });


// * Remove Data

// ** Procedures

// // Remove All Documents That Match a Condition
// var removeRestaurants = function(db, callback) {
//   db.collection('restaurants').deleteMany(
//     { "borough": "Manhattan" },
//     function(err, results) {
//       console.log(results);
//       callback();
//     }
//   );
// };

// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);

//   removeRestaurants(db, function() {
//     db.close();
//   });
// });


// // Remove at Most a Single Document
// var removeRestaurants = function(db, callback) {
//    db.collection('restaurants').deleteOne(
//       { "borough": "Queens" },
//       function(err, results) {
//          console.log(results);
//          callback();
//       }
//    );
// };

// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);

//   removeRestaurants(db, function() {
//       db.close();
//   });
// });




// // Remove All Documents

// var removeRestaurants = function(db, callback) {
//    db.collection('restaurants').deleteMany( {}, function(err, results) {
//       console.log(results);
//       callback();
//    });
// };

// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);

//   removeRestaurants(db, function() {
//       db.close();
//   });
// });


// // Drop a Collection

// var dropRestaurants = function(db, callback) {
//    db.collection('restaurants').drop( function(err, response) {
//       console.log(response)
//       callback();
//    });
// };

// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);

//   dropRestaurants(db, function() {
//       db.close();
//   });
// });



// * Data Aggregation

// // ** Group Documents by a Field and Calculate Count

// var aggregateRestaurants = function(db, callback) {
//    db.collection('restaurants').aggregate(
//      [
//        { $group: { "_id": "$borough", "count": { $sum: 1 } } }
//      ]).toArray(function(err, result) {
//      assert.equal(err, null);
//      console.log(result);
//      callback(result);
//    });
// };

// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   aggregateRestaurants(db, function() {
//       db.close();
//   });
// });

// ** Filter and Group Documents

var aggregateRestaurants = function(db, callback) {
   db.collection('restaurants').aggregate(
     [
       { $match: { "borough": "Queens", "cuisine": "Brazilian" } },
       { $group: { "_id": "$address.zipcode" , "count": { $sum: 1 } } }
     ]).toArray(function(err, result) {
       assert.equal(err, null);
       console.log(result);
       callback(result);
     });
};


MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  aggregateRestaurants(db, function() {
      db.close();
  });
});