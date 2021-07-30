const express = require("express");
const router = express.Router();
const Cats = require("../model/Cats");

router.get("/", async (req, res) => {
	try {
		const tabIndexData = [];
		const data = await Cats.find();
		for (let i = 0; i < 2; i++) {
			tabIndexData.push(Math.floor(Math.random() * data.length));
		}
		const tebSEnd = [data[tabIndexData[0]], data[tabIndexData[1]]];
		//console.log(data.length);
		res.status(200).json(tebSEnd);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

module.exports = router;
