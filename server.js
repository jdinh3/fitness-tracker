const express = require("express");
const mongoose = require("mongoose");
const db = require("./models");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(require("./controllers/routes/workoutRoutes"));
app.use(require("./controllers/routes/view"));

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});
