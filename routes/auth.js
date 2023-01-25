const router = require('express').Router();
const User = require('../models/user/user')
const bcrypt = require('bcrypt');

//register
router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass
        })
        const user = await newUser.save();
        res.send(user)
    }
    catch (error) {
        res.status(500)
        console.log(error.message);
        res.send(error.message)
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if(!user) throw new Error('User does not exist!') 

        const validated = await bcrypt.compare(req.body.password, user.password)
        if(!validated) throw new Error('Wrong credentials');
        const {password , ...restUserParams} = user._doc
        res.status(200)
        res.send(restUserParams)
    }
    catch (error) {
        console.log(error.message);
        res.status(500)
        res.send(error.message)
    }
})

module.exports = router

