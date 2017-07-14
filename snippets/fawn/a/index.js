var Fawn = require('fawn');
Fawn.init('mongodb://127.0.0.1:27017/testDB');

var task = Fawn.Task();

console.log("I am ready")

//assuming "Accounts" is the Accounts collection
task.update("Accounts", {firstName: "John", lastName: "Smith"}, {$inc: {balance: -20}})
  .update("Accounts", {firstName: "Broke", lastName: "Ass"}, {$inc: {balance: 20}})
  .run()
  .then(function(results){
    // task is complete 

    // result from first operation
    var firstUpdateResult = results[0];

    // result from second operation
    var secondUpdateResult = results[1];

    console.log("complete task " + firstUpdateResult + " " + secondUpdateResult)

  })
  .catch(function(err){
    // Everything has been rolled back.
    
    // log the error which caused the failure
    console.log(err);
  });
