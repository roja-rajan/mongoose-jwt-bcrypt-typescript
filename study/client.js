var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://rojarajan2000:<Roja@123>@cluster0.sj1yefy.mongodb.net/";
console.log("hey");
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});