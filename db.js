const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
// const dbName = 'myproject';

// Use connect method to connect to the server
MongoClient.connect(url, (err, client) => {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  
  client.close();
});


MongoClient.connect(url, (err, db) => {
    db.collection('Employee').insertOne({
        Employeeid: 4,
        EmployeeName: "NewEmployee"
    })
})

MongoClient.connect(url, (err, db) => {
  db.collection('Employee').updateOne({
      "EmployeeName": "NewEmployee"
  }, { $set: {"EmployeeName": "Mohan"}
    }
  )
})

MongoClient.connect(url, (err, db) => {
  db.collection('Employee').deleteOne(
    {"EmployeeName": "Mohan"}
  )
})

