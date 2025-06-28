const express = require("express");
const mongoose = require("mongoose");
const search = require("./models/Recentsearch");
const recentroutes = require("./route/Recentroute");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/weather", recentroutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected succesfully"))
    .catch((err) => console.log(err));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
