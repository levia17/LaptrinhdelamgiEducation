const express = require("express");
const router = express.Router();
const BlogsModel = require("../models/blogs");
const { create } = require("../models/account");

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
  const blogID = req.params.id;

  BlogsModel.deleteOne({
    blogID: blogID,
  })
    .then((data) => res.json("Da xoa bai viet"))
    .catch((err) => res.json("Loi!"));
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
