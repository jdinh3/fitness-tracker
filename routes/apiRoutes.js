const db = require("../models/workouts");

module.exports = function (app) {
  app.get("/api/workouts", (req, res) => {
    db.find({}, function (error, data) {
      console.log(data);
      res.json(data);
    });
  });

  app.put("/api/workouts/:id", () => {});

  app.post("/api/workouts", () => {});

  app.get("/api/workouts/range", () => {});

  app.get("/api/work", () => {
    console.log("help");
    res.json({});
  });
};
