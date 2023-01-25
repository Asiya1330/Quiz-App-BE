const router = require('express').Router();
const Fibs = require('../models/FIBs')
const Mcqs = require('../models/MCQS');
const getController = require('../baseController/controller');

router.get('/:module/list', async (req, res) => {
    try {
        let result;
        let model = getController(req['params'].module);
        result = await model.find(req['query']);
        res.send(result)
    }
    catch (error) {
        console.log(error.message);
        res.send(error.message)
    }
})

router.post('/:module', async (req, res) => {
    try {
        let result;
        let model = getController(req['params'].module);
        result = await model.create(req.body);
        res.send(result)
    }
    catch (error) {
        console.log(error.message);
        res.send(error.message)
    }
})

router.get('/:module/:id', async (req, res) => {
    try {
        let result;
        let model = getController(req['params'].module);
        result = await model.findOne({ _id: req['params'].id });
        res.send(result)
    }
    catch (error) {
        console.log(error.message);
        res.send(error.message)
    }
})

router.put('/:module/:id', async (req, res) => {
    try {
        let result;
        let model = getController(req['params'].module);
        result = await model.updateOne(req['params'].id, req.body);
        res.send(result)
    }
    catch (error) {
        console.log(error.message);
        res.send(error.message)
    }
})


router.delete('/:module/:id', async (req, res) => {
    try {
        let result;
        let model = getController(req['params'].module);
        result = await model.deleteOne(req['params'].id);
        res.send(result)
    }
    catch (error) {
        console.log(error.message);
        res.send(error.message)
    }
})


module.exports = router

