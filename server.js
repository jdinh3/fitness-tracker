const express = require("express");
const mongoose = require("mongoose");
const db = require("./models");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

require("./routes/apiRoutes")(app)
require("./routes/workoutRoutes")(app)

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});

//app.use(express.router)

/**
 * 
 * function apiRoutes(app) {
  app.get("/api/workouts", (req, res) => {
    db.find({}, function(error, data) {
        console.log(data)
        res.json({})
    }
  )})


  app.get("/api/work", () =>{
      console.log("help")
      res.json({});
  })
}

apiRoutes(app) IS THE SAME AS LINE 18
 */
//require("APIROUTE") = APIROUTE
//APIROUTE(app)
