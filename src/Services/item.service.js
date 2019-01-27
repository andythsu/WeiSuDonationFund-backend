module.exports = (() => {
    const item = require('../Models/item.js');
    var items = [];
    function addItem(name, price, url){
        return new Promise((resolve, reject) => {
            try{
                const newItem = new item(name, price, url);
                items.push(newItem);
                const uuid = newItem._id;
                resolve(uuid);
            }catch(err){
                reject(err);   
            }
        });
        
    }
    function getAllItems(){
        return new Promise((resolve, reject) => {
            resolve(items);
        });
    }
    return { getAllItems, addItem };
})();