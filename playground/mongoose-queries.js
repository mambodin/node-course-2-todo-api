const {ObjectID} = require('mongodb');

const{mongoose} = require ('./../server/db/mongoose');
const{Todo} = require ('./../server/models/todo');
const{User} = require ('./../server/models/user');
// 5a87100976c08f3d88c56b63

var id = '5a87100976c08f3d88c56b63';
var id2 = '5a86b1ed698f331e70d5bdca';

// if(!ObjectID.isValid(id)) {
//   console.log('ID no valid');
// }
//
// Todo.find({
//   _id: id
// }).then ((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then ((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) =>{
//   if(!todo){
//     return console.log('ID not found');
//   }
//   console.log('Todo by ID', todo);
// }).catch((e) => {
//   console.log(e);
// });

User.findById(id2).then((user) => {
  if(!user){
    return console.log('User not found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch ((e) => {
  console.log(e);
});
