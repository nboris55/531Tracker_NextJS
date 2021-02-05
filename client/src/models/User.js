const mongoose = require('mongoose');
const crypto = require('crypto')

const UserSchema = new mongoose.Schema({
    name: {
      type: String,
      minlength: 2,
      maxlength:50,
      trim: true,
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
    profile: {
      type: mongoose.Schema.ObjectId,
      ref: 'Profile',
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    createdAt: {
      type: Date,
      default: Date.now
    }
  });

  // Generate and hash password token
  UserSchema.methods.getResetPasswordToken = function () {
    // Generate Token
    const resetToken = crypto.randomBytes(20).toString('hex')

    // Hash token and set to reset token
    this.resetPasswordToken = crypto.createHash('sha512').update(resetToken).digest('hex')

    // Set Expire
    this.resetPasswordExpire = Date.now() + 10 * 60 * 100

    return resetToken
  }

  module.exports = mongoose.models.User || mongoose.model('User', UserSchema); 