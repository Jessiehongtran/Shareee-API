const db = require('../../dbConfig');

const getItemsForACategory = (categoryId) => {
    return db('item as i')
            .where({category_id: categoryId})
            .select(
                'i.id',
                'i.link',
                'i.title',
                'i.genre',
                'i.by',
                'i.review',
                'i.created_at',
                'i.added_by',
                'i.likes'
             )
}

const addItem = (item) => {
    return db('item')
            .returning('id')
            .insert(item)
            .then(ids => ({id: ids[0]}))
}

const updateItem = (change,id) => {
    return db('item')
            .where({id: id})
            .update(change)
}

const deleteItem = (id) => {
    return db('item')
            .where({id: id})
            .del()
}

module.exports = {
    getItemsForACategory,
    addItem,
    updateItem,
    deleteItem
}