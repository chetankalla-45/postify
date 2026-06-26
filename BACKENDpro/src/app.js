const express = require('express')
const multer = require('multer')
const uploadFile = require("./services/storage.service")
const postModel = require("./models/post.model")
const cors = require("cors")

const app = express()

app.use(cors())  

// Allows frontend

// localhost:5173

// ↓

// localhost:3000

// to communicate.

// Without CORS

// browser blocks the request.


app.use(express.json())  //middleware

const upload = multer({storage : multer.memoryStorage()})  // to read files multer is used 

app.post('/create-post', upload.single("image"), async (req,res) => {
    console.log(req.body);
    console.log(req.file);

    const result = await uploadFile(req.file.buffer)

    // console.log(result)
    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })
    // console.log("post creatted")

    return res.status(201).json({
        message: "Post created successufully",
        post
    })

})

app.get("/posts", async (req,res) => {

    const posts = await postModel.find()

    return res.status(200).json({
        message : "Posts fetched suuccessfully",
        posts
    })

})

app.delete("/posts/:id", async (req,res) => {

    try {
        const id = req.params.id;

        const deletedPost = await postModel.findByIdAndDelete(id);

        console.log("Deleted:", deletedPost);

        if(!deletedPost){
            return res.status(404).json({
                message:"Post not found"
            });
        }

        res.status(200).json({
            message:"Post deleted successfully",
            deletedPost
        });

    } catch(err){
        res.status(500).json({
            message: err.message
        });
    }

});

module.exports = app;