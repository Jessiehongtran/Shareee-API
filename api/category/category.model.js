const db = require('../../dbConfig');

const getCates = () => {
    return db("category")
}

const addCate = (cate) => {
    return db("category")
            .returning('id')
            .insert(cate)
            .then(ids => ({id: ids[0]}))
}

module.exports = {
    getCates,
    addCate
}