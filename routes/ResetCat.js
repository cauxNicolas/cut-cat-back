const express = require("express");
const router = express.Router();
// fichier
const dataCats = require("../data/cats.json");
const Cat = require("../model/Cats");

router.post("/resetCat", (req, res) => {
	/* for (let i = 0; i < dataCats.images.length; i++) {
		let newcat = new Cat({
			picture: dataCats.images[i].url,
			initialId: dataCats.images[i].id,
			vote: 0,
			appear: 0,
		});
		newcat.save();
	} */
	try {
		res.status(200).json("routes resetcats ok");
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

module.exports = router;
