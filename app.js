const express = require('express')
const app = express()
const cors = require('cors')

const cateRoute = require('./api/category/category.route');
const itemRoute = require('./api/item/item.route');

app.use(express.json());
app.use(cors());
app.use('/items', itemRoute);
app.use('/categories', cateRoute);

module.exports = app;