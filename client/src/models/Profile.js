const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    bench: {
      type: Number,
      minlength: 2,
      maxlength: 3,
    },
    squat: {
        type: Number,
        minlength: 2,
        maxlength: 3,
      },
    overheadPress: {
      type: Number,
      minlength: 2,
      maxlength: 3,
    },
    deadlift: {
        type: Number,
        minlength: 2,
        maxlength: 3,
      },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });


  module.exports = mongoose.models.Profile || mongoose.model('Profile', ProfileSchema); 