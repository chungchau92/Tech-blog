const router = require('express').Router();
const { User } = require("../../models");

//  signup user
router.post("/signup", async (req, res) => {
    try {
        console.log(123)

        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

        res.status(200).json(userData);

        }) 
    }  catch (err) {
        res.status(400).json(err);
    }
})

// login user
router.post("/login", async (req,res) => {
    try{
        const userData = await User.findOne({where: {username: req.body.username}});
        // if(!userData) {
        //     res.status(400).json({message: "incorrect username or password, please try again"});
        //     return
        // }

        // const validPassword = await userData.checkPassword(req.body.password);

        // if(!validPassword) {
        //     res.status(400).json({message: "incorrect username or password, please try again"})
        // }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            
            res.json({ user: userData, message: 'You are now logged in!' });
          });
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;