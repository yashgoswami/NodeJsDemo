// load express
const express = require('express');
const morgan = require('morgan')

const app = express();
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


app.listen(3003, ()=>{
    console.log("Web server is listening")
});
