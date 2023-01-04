const express = require("express");

const routes = require("./controllers")

const app = express();

const POST = process.env.POST || 3001;

app.use(routes);

app.listen(POST, () => {
    console.log("Listening on http://localhost:"+ POST);
});
