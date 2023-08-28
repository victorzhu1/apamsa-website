const Post = require("./models/PostModel");
const NewsletterSub = require("./models/NewsletterSub");
const User = require("./models/User");


const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const bcrypt = require('bcrypt');
const {sign} = require('jsonwebtoken');

require('dotenv').config();


const databaseUrl = process.env.DATABASE_URL;
const PORT = process.env.PORT;

const app = express();

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


app.get('/subscribe', async (req, res) => {
    try {
        const subs = await NewsletterSub.find({});
        res.status(200).json(subs);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

app.post('/subscribe', async (req, res) => {
    try {
        const sub = await NewsletterSub.create(req.body);
        res.status(200).json(sub);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

app.get('/auth', async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

app.post('/auth', async (req, res) => {
    try {
        const { username, password } = req.body;
        const hash = await bcrypt.hash(password, 10);
        await User.create({
            username: username,
            password: hash,
        });
        res.status(200).json({ username: username });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});


app.post('/auth/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username: username });

        if (!user) {
            res.json({ error: "User Doesn't Exist" });
            return;
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            res.json({ error: "Incorrect Username/Password Combination" });
            return;
        }

        res.json("Login Successful");

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});


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