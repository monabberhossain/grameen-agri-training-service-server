const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require("mongodb");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello Monabber Hossain! I am from server!");
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});