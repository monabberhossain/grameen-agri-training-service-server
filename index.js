const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.8n4atui.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
});

app.get("/", (req, res) => {
    res.send("Hello Monabber Hossain! I am from server!");
});

async function run() {
    try {
        const serviceCollection = client
            .db("grameenAgri")
            .collection("services");

        app.get("/services", async (req, res) => {
            const cursor = serviceCollection.find({});
            const services = await cursor.toArray();
            res.send(services);
        });
        app.get("/services/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const service = await serviceCollection.findOne(query);
            res.send(service);

            console.log(result);
        });
    } finally {
    }
}

run().catch((err) => console.log(err));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
