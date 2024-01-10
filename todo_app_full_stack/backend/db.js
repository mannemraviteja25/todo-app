const mongoose = require('mongoose');
const { DB_url } = require('./config.js')



mongoose.connect(DB_url);

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
})

const todo = mongoose.model('todo', todoSchema);


module.exports = {
  todo
}
