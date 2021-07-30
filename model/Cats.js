const mongoose = require("mongoose");

const Cat = mongoose.model("Cat", {
	picture: String,
	initialId: String,
	vote: Number,
	appear: Number,
});

module.exports = Cat;
