const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name: {
      type: String,
      minlength: 2,
      maxlength:50,
      required: [true, 'Please add a name']
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please add a valid email']
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
      minlength: 6,
      select: false
    },
    bench: {
      type: Number,
      minlength: 2,
      maxlength:3,
    },
    squat: {
        type: Number,
        minlength: 2,
        maxlength:3,
    },
    deadlift: {
    type: Number,
    minlength: 2,
    maxlength:3,
    }, 
    overheadPress: {
        type: Number,
        minlength: 2,
        maxlength:3,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    createdAt: {
      type: Date,
      default: Date.now
    }
  });

//Encrypt password using bcrypt
UserSchema.pre('save', async function(next) {
//Skips this for password reset
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
});

  module.exports = mongoose.models.User || mongoose.model('User', UserSchema); 