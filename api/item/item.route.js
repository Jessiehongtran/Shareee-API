const route = require('express').Router();
const itemModel = require('./item.model');

//GET items for a category
route.get('/:categoryId', async (req,res) => {
    const { categoryId } = req.params
    try {
        const items = await itemModel.getItemsForACategory(categoryId)
        res.status(200).json(items)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//POST an item
route.post('/', async (req,res) => {
    const item = req.body
    try {
        const id = await itemModel.addItem(item);
        res.status(200).json(id)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//UPDATE an item
route.patch('/:itemId', async (req,res) => {
    const itemId = req.params.itemId
    const change = req.body
    try {
        const count = await itemModel.updateItem(change, itemId)
        res.status(200).json({message: `Updated ${count} item`})
    } catch (err){
        res.status(500).json(err.message)
    }
})

//DELETE an item
route.delete('/:itemId', async (req,res) => {
    const itemId = req.params.itemId
    try {
        const count = await itemModel.deleteItem(itemId)
        res.status(200).json({message: `Deleted ${count} item`})
    } catch (err){
        res.status(500).json(err.message)
    }
})
module.exports = route;