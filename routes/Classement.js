const express = require("express");
const router = express.Router();
const Cats = require("../model/Cats");

router.post("/classement", async (req, res) => {
	const tab = req.fields.data;
	const index = req.fields.numberCard;
	console.log(tab[index]);
	try {
		const search = await Cats.findById({ _id: tab[index]._id });
		search.vote = search.vote + 1;
		await search.save();
		res.status(200).json("ca marche");
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

router.get("/classement", async (req, res) => {
	try {
		const data = await Cats.find().sort({ vote: -1 });
		res.status(200).json(data);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

module.exports = router;
