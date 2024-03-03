const mongoose = require("mongoose");
require("./config");

// Đoạn mã Schema và Model của file cũ
const Schema = mongoose.Schema;

const BlogsSchema = new Schema(
  {
    thumb: String,
    blogID: Number,
    author: String,
  },
  {
    collection: "blogs",
  }
);

const BlogsModel = mongoose.model("blogs", BlogsSchema);

module.exports = BlogsModel;
