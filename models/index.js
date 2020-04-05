const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb+srv://SINGHHR:helloworld123@cluster0-uciiz.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true});

module.exports.User = require("./user");
module.exports.Message = require("./message");
