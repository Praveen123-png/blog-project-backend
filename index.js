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
var titleArray = [];
var blogsArray = [];

//an array of objects, this is best for both fetching and deleting
var post = [
    {title: "firstBlog", content: "hello"},
    {title: "firstBlog", content: "hello"},
]

app.get("/blogs", (req, res) => {
    res.render("blogs.ejs");
    //     , {
    //     titleHtml: req.body.title,
    //     blogsHtml: req.body.blogs,
    // });
    
});

app.post("/submit", (req, res) => {
    var title = req.body.title;
    var blogs = req.body.blog;
    // console.log(`Title: ${title} \nText: ${blogs}`);
    res.render("blogs.ejs", {
        titleHtml: title,
        blogsHtml: blogs,
    });
});

app.delete("/delete", (req, res) => {

});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});