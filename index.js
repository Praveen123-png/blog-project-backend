import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

//separate array for each one or
// var titleArray = [];
// var blogsArray = [];

//an array of objects, this is best for both fetching and deleting
var post = []

app.get("/blogs", (req, res) => {
    res.render("blogs.ejs", {posts: post});
});

app.post("/submit", (req, res) => {
    var title = req.body.title;
    var blogs = req.body.blog;
    // console.log(`Title: ${title} \nText: ${blogs}`);

    if(title.length > 0 && blogs.length > 0){
        post.push({title: title, content: blogs});
        // console.log(post);
        res.render("blogs.ejs", {posts: post});
    } 
    else {
        res.render("blogs.ejs", {posts: 0});
    }
});

app.delete("/delete", (req, res) => {
    console.log("deleting the blog");
    res.send("delete request");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});