require("dotenv").config();
const express = require("express");
const formidable = require("express-formidable");
const cors = require("cors");
const mongoose = require("mongoose");

// bdd
mongoose.connect(process.env.MONGODB_URI, {
	useCreateIndex: true,
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const app = express();
app.use(formidable());
app.use(cors());

// Routes
const ShowCats = require("./routes/ShowCats");
app.use(ShowCats);
const ResetCat = require("./routes/ResetCat");
app.use(ResetCat);
const Classement = require("./routes/Classement");
app.use(Classement);

app.listen(process.env.PORT || 3100, () => {
	console.log("server started - cut cat");
});
