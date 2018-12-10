
const mongoose = require('mongoose');


const schema = mongoose.Schema({
  title: String,
  content: String,
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
});

mongoose.model('Article', schema);