const router = require("express").Router();

router.get("/", (req,res) => {
    res.end("foo")
})

module.exports = router;