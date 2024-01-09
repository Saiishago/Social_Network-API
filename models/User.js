const {Schema, model, Types} = require('mongoose'); 
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
      // use regex (regular expression) to validate email format
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Invalid email address'],
    },
    thoughts:[
       {
         type: Schema.Types.ObjectId,
         ref: 'Thought',
        }
    ],
    friends:[
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      }
    ],
  
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
}
);

userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
});
const User = model('User',userSchema);

module.exports = User



