// load express, a webframework
const express = require('express');

// load morgan, a middleware to log http req/reponses
const morgan = require('morgan')

// to read body contents  
const bodyParser = require('body-parser')

const app = express();

// middleware to read body
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static("./public"))

app.use(morgan('combined'))

// http://localhost:3003/
app.get("/", (req, res) =>{
    console.log("Responding to get from root")
    return res.status(200).send("helloooo world")
});


// http://localhost:3003/
app.get("/posts", (req, res) =>{

    let post1 = {title: "Post 1", id:1};
    
    let post2 = {title: "Post 2", id:2};

    let posts = [post1, post2];
    res.status(200).json(posts);    
    });

// http://localhost:3003/add_post
app.post("/add_post", (req, res) => {
    const post_title = req.body.post_title;
    const post_description = req.body.post_description;    
    res.send(post_title);

});

app.listen(3003, ()=>{
    console.log("Web server is listening")
});
