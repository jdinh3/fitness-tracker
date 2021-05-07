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

app.use(require("./routes/homeRoutes"));
app.use(require("./routes/workoutRoutes"));

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});
