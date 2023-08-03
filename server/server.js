const express = require("express");
const mongoose = require("mongoose");
const Post = require("./models/PostModel");
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server running');
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
mongoose.connect('mongodb+srv://victorzhu:z43202jms@cluster0.2fmfggq.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(3001, () => {
        console.log('Server running on port 3001');
    });    
}).catch((error) => {
    console.log("Error when connecting to MongoDB");
})