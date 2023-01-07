const router = require('express').Router();
const { User } = require("../../models");

router.post("/signup", async (req, res) => {
    try {
        console.log(123)

        const userData = await User.create(req.body);

        res.status(200).json(userData);

    } catch (err) {
        res.status(400).json(err);
    }
})

router.get("/signup", async (req,res) => {
    const userData = await User.findAll()
    res.json(userData);
})

module.exports = router;