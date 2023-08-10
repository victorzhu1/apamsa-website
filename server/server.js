const express = require("express");
const mongoose = require("mongoose");
const Post = require("./models/PostModel");
const app = express();
const cors = require('cors');
require('dotenv').config();


const databaseUrl = process.env.DATABASE_URL;
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server running successfully!');
})

app.get('/announcements', async (req, res) => {
    try {
        const posts = await Post.find({});
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})


app.post('/announcements', async (req, res) => {
    try {
        const post = await Post.create(req.body);
        res.status(200).json(post);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

mongoose.set("strictQuery", false);
mongoose.connect(databaseUrl)
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });  

}).catch((error) => {
    console.log("Error when connecting to MongoDB");
})