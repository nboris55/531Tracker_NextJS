const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    },
    program: {
      type: String,
      // enum: ['A - Same lift for main and assistance', 'B - Opposite lift for main and assistance'],
      // default: 'Please select a program variation'
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
    totalDays: {
        type: Number,
        default: 0,
      },
    currentDay: {
        type: Number,
        default: 0
      },
    currentWeek: {
      type: Number,
      default: 0
    },
    benchVolume : {
        type: Number,
        default: 0
    },
    squatVolume : {
      type: Number,
      default: 0
    },
    overheadPressVolume : {
      type: Number,
      default: 0
    },
    deadliftVolume : {
      type: Number,
      default: 0
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    latestWorkout: {
      type: Date,
      default: null
    }
  });


  module.exports = mongoose.models.Profile || mongoose.model('Profile', ProfileSchema); 