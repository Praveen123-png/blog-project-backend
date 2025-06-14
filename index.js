import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/blogs", (req, res) => {
    res.render("blogs.ejs");
});

app.post("/submit", (req, res) => {
    let title = req.body.title;
    let blogs = req.body.blog;
    // console.log(`Title: ${title} \nText: ${blogs}`);
    res.render("blogs.ejs", {
        titleHtml: title,
        blogsHtml: blogs,
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});