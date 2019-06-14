const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: String,
        default: Date.now
    }
  });


  /**
   * The  unique  value in our schema, along with the  mongoose-unique-validator  passed as a plugin,
   *  will ensure that no two users can share the same email address.
   */
  UserSchema.plugin(uniqueValidator);


  module.exports = mongoose.model('User', UserSchema);