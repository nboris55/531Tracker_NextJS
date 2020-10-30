const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    },
    program: {
      type: String,
    },
    bench: {
      type: Number,
      minlength: 2,
      maxlength: 3,
      required: [true, 'Please enter your bench max'],
    },
    squat: {
        type: Number,
        minlength: 2,
        maxlength: 3,
        required: [true, 'Please enter your squat max'],
      },
    overheadPress: {
      type: Number,
      minlength: 2,
      maxlength: 3,
      required: [true, 'Please enter your overhead press max'],
    },
    deadlift: {
        type: Number,
        minlength: 2,
        maxlength: 3,
        required: [true, 'Please enter your deadlift max'],
      },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });


  module.exports = mongoose.models.Profile || mongoose.model('Profile', ProfileSchema); 