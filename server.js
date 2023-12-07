const mongoose = require("mongoose");
const express = require("express");
const app = express();
require("dotenv").config();

const DB = process.env.DB;

const uri = `mongodb+srv://firasazzebi66:${DB}@cluster0.z3mogai.mongodb.net/beatbones?retryWrites=true&w=majority`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: false, // Disable SSL
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected to MongoDB Atlas");
});

// mongoose
//   .connect(
//     `mongodb+srv://firasazzebi66:${DB}@cluster0.z3mogai.mongodb.net/beatbones?retryWrites=true&w=majority`
//   )
//   .then(() => console.log("connected to the database"))
//   .catch((err) => console.log(err));

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
