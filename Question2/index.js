const express = require("express");
const router = express.Router();
const Posts = require("../models/Posts");
const mongoose = require("mongoose");
var cors = require("cors");

const app = express();

const mongoURI = "mongodb://localhost:27017/test";

mongoose.connect(mongoURI, () => {
  console.log("Connected to Mongo Successfully");
});

const port = 5000;

app.use(express.json());
app.use(cors());

router.get("/getallposts", async (req, res) => {
  try {
    const posts = await Posts.find();
    res.json(posts);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error...!!");
  }
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});