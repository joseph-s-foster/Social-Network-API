const mongoose = require('mongoose');

// Schema to create user model
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match email address format'],
    },
    thoughts: [{type: mongoose.Schema.Types.ObjectId, ref:"thought"}],
    friends: [{type: mongoose.Schema.Types.ObjectId, ref:"user"}],
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
);

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = mongoose.model('User', userSchema);

module.exports = User;
