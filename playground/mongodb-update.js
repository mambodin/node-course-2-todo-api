const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }
  const db = client.db('TodoApp');
  console.log('Connected to MongoDB server');

  db.collection('Users').findOneAndUpdate(
    {_id:new ObjectID('5a851dabf6b1a92160d5ca9f')
    }, {
      $set: {
        name: 'Malik2',
        location: 'Bukit Panjang'
      },
      $inc: {
        age: -10
      }
    }, {
      returnOriginal: false
    }).then((result) =>{
      console.log(result);
    });

  // client.close();
});
