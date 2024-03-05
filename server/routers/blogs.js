const express = require("express");
const router = express.Router();
const BlogsModel = require("../models/blogs");

// Admin
router.get("/", (req, res, next) => {
  BlogsModel.find({})
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

router.post("/", (req, res, next) => {
  const blogID = req.body.blogID;
  const authorUsername = req.body.authorUsername;
  const authorAvatar = req.body.authorAvatar;
  const thumbnail = req.body.thumbnail;
  const title = req.body.title;
  const createAt = new Date();

  BlogsModel.create({
    blogID: blogID,
    authorUsername: authorUsername,
    authorAvatar: authorAvatar,
    title: title,
    thumbnail: thumbnail,
    createAt: createAt,
  })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  BlogsModel.deleteOne({
    _id: id,
  })
    .then((data) => res.json("Da xoa bai viet"))
    .catch((err) => res.json("Loi!"));
});

router.get("/page", (req, res) => {
  BlogsModel.find()
    .limit(1)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

// User
router.delete("/:id", (req, res) => {
  const blogID = req.params.id;

  BlogsModel.deleteOne({
    blogID: blogID,
  })
    .then((data) => res.json("Da xoa bai viet"))
    .catch((err) => res.json("Loi!"));
});

module.exports = router;
