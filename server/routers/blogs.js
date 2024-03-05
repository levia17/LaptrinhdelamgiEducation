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
  const author = req.body.author;
  const thumb = req.body.thumb;
  const title = req.body.title;
  const createAt = new Date();

  BlogsModel.create({
    blogID: blogID,
    author: author,
    thumb: thumb || "https://laptrinhdelamgi.edu.vn/img/logo_big.0401b0f1.png",
    title: title,
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
