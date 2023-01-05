const express = require("express");

const exphbs = require("express-handlebars")

const routes = require("./controllers")

const app = express();

const POST = process.env.POST || 3001;

app.use(routes);

// Inform Express.js on which template engine to use
app.engine("handlebars", exphbs.engine())
app.set('view engine', 'handlebars');

app.listen(POST, () => {
    console.log("Listening on http://localhost:"+ POST);
});
