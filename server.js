const express = require("express");

const app = express();

const POST = process.env.POST || 3001;

app.listen(POST, () => {
    console.log("Listening on http://localhost"+ POST);
});
