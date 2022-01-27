require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use("/auth", require("./routes/auth"));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})