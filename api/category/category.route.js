const route = require('express').Router();
const cateModel = require('./category.model');

//GET category
route.get('/', async (req,res) => {
    try {
        const categories = await cateModel.getCates();
        res.status(200).json(categories)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//POST category
route.post('/', async (req,res) => {
    const category = req.body
    try {
        const id = await cateModel.addCate(category);
        res.status(200).json(id)
    } catch (err){
        res.status(500).json(err.message)
    }
})


module.exports = route;