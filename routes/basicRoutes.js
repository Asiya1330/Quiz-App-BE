const router = require('express').Router();
const Fibs = require('../models/FIBs')
const Mcqs = require('../models/MCQS')

router.get('/:module/list', async (req, res) => {
    try {
        let result;
        if (req['params'].module == 'fibs') result = await Fibs.find()
        if (req['params'].module == 'mcqs') result = await Mcqs.find();
        res.send(result)
    }
    catch (error) {
        console.log(error.message);
        res.send(error.message)
    }
})

router.post('/:module', async (req, res) => {
    try {
        let result
        if (req['params'].module == 'fibs') result = await Fibs.create(req.body);
        if (req['params'].module == 'mcqs') result = await Mcqs.create(req.body);
        res.send(result)
    }
    catch (error) {
        console.log(error.message);
        res.send(error.message)
    }
})


module.exports = router

