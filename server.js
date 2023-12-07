const mongoose = require("mongoose");
const express = require("express");
const app = express();
require("dotenv").config();

const DB = process.env.DB;
// `mongodb+srv://firasazzebi66:${DB}@cluster0.z3mogai.mongodb.net/beatbones?retryWrites=true&w=majority`
mongoose
  .connect(
    "mongodb+srv://BeatBones:Firas134679@beatbones.dlibg6b.mongodb.net/Test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
  )
  .then(() => console.log("connected to the database"))
  .catch((err) => console.log(err));

app.use(express.json());

app.use(require("./Routes/Users/index"));
app.use(require("./Routes/Admin/index"));

app.use((req, res) => {
  res.send("API is running");
});

const PORT = process.env.PORT || 7766;

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log("server is up");
});
