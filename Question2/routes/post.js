const express = require("express");
const router = express.Router();
const post = require("../models/Post");



router.get("/fetchallpost", async (req, res) => {
  try {
    const post = await post.find();
    res.json(post);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(" Error");
  }
});

router.post("/addpost", async (req, res) => {
  try {
    const { title, description } = req.body;

    const post = new post({
      title,
      description,
    });

    const savePost = await post.save();
    res.json(savePost);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Error !!");
  }
});

   


module.exports = router;
