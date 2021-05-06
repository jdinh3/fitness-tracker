const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercises: [
    {
      name: {
        type: String,
        required: "Enter a name for the exercise"
      },
      type: {
        type: String,
        required: "Enter a type of workout"
      },
      weight: {
        type: Number
      },
      sets: {
        type: Number

      },
      reps: {
        type: Number
      },
      duration: {
        type: Number,
        required: "Enter a duration"
      },
      distance: {
        type: Number
      }
    }
  ],
  day: {
    type: Date,
    default: Date.now,
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
