const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Use connect method to connect to the server
MongoClient.connect(url, (err, client) => {
  assert.equal(null, err)

  console.log("Connected successfully to server")

  const db = client.db('myproject')

  // addMum(db)
  // addSiblings(db)
  // updateMum(db)
  // updatePeter(db)
  // removePeter(db)
  // findFamily(db)
  // findKate(db)
  // findParents(db)
  // findCharacteristics(db)

  

  client.close()
})


const addMum = (db) => {
  db.collection('mycollection').insert(
    {
      name: "Robyn",
      // surname: "McLaughlin",
      relationship: "mother",
      charactertistics: ["wise", "kind", "selfless"],
      age: 56
    }
  )
}

const addSiblings = (db) => {
  db.collection('mycollection').insertMany([
    {
      name: "Kate",
      surname: "McLaughlin",
      relationship: "sister",
      charactertistics: ["strong", "stubborn", "annoying"],
      age: 26
    },
    {
      name: "Tom",
      surname: "McLaughlin",
      relationship: "brother",
      charactertistics: ["funny", "annoying", "too cool"],
      age: 24
    }
  ])
}

const updateMum = (db) => {
  db.collection('mycollection').update(
    {
      name: "Robyn",
    },
    {
      $set: {surname: "McLaughlin"}
    }
  )
}

const updatePeter = (db) => {
  db.collection('mycollection').update(
    {
      name: "Peter",
    },
    {
      name: "Peter",
      surname: "McLaughlin",
      relationship: "father",
      charactertistics: ["generous", "smart", "wise"],
      age: 58
    },
    {
      upsert: true
    }
  )
}

const removePeter = (db) => {
  db.collection('mycollection').remove(
    {
      name: "Peter"
    }
  )
}

// const findFamily = (db) => {
//   db.collection('mycollection').find({})
// }

const findKate = (db) => {
  db.collection('mycollection').find(
    {
      name: "Kate"
    }
  )
}

const findParents = (db) => {
  db.collection('mycollection').find(
    {
      age: {$gt:40}
    }
  )
}

const findCharacteristics = (db) => {
  db.collection('mycollection').find(
    {
      characteristics: "wise"
    }
  )
}

// can iterate over docs with a forEach



