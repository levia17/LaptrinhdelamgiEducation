const mongoose = require("mongoose");
require("./config");

// Đoạn mã Schema và Model của file cũ
const Schema = mongoose.Schema;

const AccountSchema = new Schema(
  {
    username: String,
    password: String,
    nickname: String,
    role: String,
    avatar: String,
    createAt: String,
  },
  {
    collection: "account",
  }
);

const AccountModel = mongoose.model("account", AccountSchema);

module.exports = AccountModel;
