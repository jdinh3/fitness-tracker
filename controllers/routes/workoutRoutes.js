const Workout = require("../../models/workouts");
const router = require("express").Router();

router.get("/api/workouts", (req, res) => {
  Workout.aggregate([
    { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
  ])
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      if (err) throw err;
    });
});

router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(
    req.params.id,
    {
      $push: { exercises: req.body },
    },
    { new: true, runValidators: true }
  )
    .then((updatedWorkout) => res.json(updatedWorkout))
    .catch((err) => res.json(err));
});

router.post("/api/workouts", (req, res) => {
  Workout.create(req.body)
    .then((newWorkout) => {
      res.json(newWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.aggregate([
    { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
  ])
    .sort({ _id: -1 })
    .limit(7)
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      if (err) throw err;
    });
});

module.exports = router;
