const express = require("express");
const { create } = require("express-handlebars");

const app = express();
const port = 3000;

const hbs = create({
    extname: ".hbs",
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");

app.get("/", (req, res) => {
    const urls = [
        {
            origin: "www.google.com/simpsons1",
            shortURL: "hom1",
        },
        {
            origin: "www.google.com/simpsons2",
            shortURL: "hom2",
        },
        {
            origin: "www.google.com/simpsons3",
            shortURL: "hom3",
        },
    ];
    res.render("home", { urls: urls });
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.use(express.static(__dirname + "/public"));

app.listen(port, () => console.log("escuchando"));
