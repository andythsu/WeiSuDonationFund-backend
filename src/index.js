const express = require('express')
const app = express()
const port = 3000
const bodyparser = require('body-parser');

const itemApi = require('./Apis/item.api.js');

app.use(bodyparser.json());

app.use('/item', (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});

app.use('/item', itemApi);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))