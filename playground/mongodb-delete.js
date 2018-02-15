const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }
  const db = client.db('TodoApp');
  console.log('Connected to MongoDB server');

  //deleteMany

  db.collection('Users').deleteMany({name: 'Malik'}).then((result) => {
    console.log(result);
  });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) =>{
  //   console.log(result);
  // });

//findeOneAndDelete

  db.collection('Users').findOneAndDelete({
    _id : new ObjectID('5a851dacf6b1a92160d5caa0')}).then((result) =>{
    console.log(result);
  });
  // client.close();
});
