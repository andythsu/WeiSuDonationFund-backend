module.exports = (() => {
    const express = require('express');
    const itemService = require('../Services/item.service.js');
    const router = express.Router();
    
    router.options('', (req, res, next)=>{
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader('Access-Control-Allow-Methods', '*');
        res.setHeader("Access-Control-Allow-Headers", "*");
    });

    router.get('/', (req, res, next) => {
        // res.setHeader("Access-Control-Allow-Origin", "*");
        // res.setHeader('Access-Control-Allow-Methods', '*');
        // res.setHeader("Access-Control-Allow-Headers", "*");
        itemService.getAllItems().then((items) => {
            items = items.map((item) => {
                const id = item._id;
                const name = item._name;
                const price = item._price;
                const url = item._url;
                return { id, name, price, url };
            });
            res.send(items);
        }).catch((err) => {
            console.log(err);
        });
    });

    router.post('/', (req, res, next) => {
        const { name, price, url } = req.body;
        itemService.addItem(name, price, url).then((id) => {
            res.status(200).send(id);
        }).catch((err) => {
            console.log(err);
        });

    });
  
    return router;
  })();
  