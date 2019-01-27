const uuid = require('uuid/v4');
class item{
    constructor(name, price, url){
        this._id = uuid();
        this._name = name;
        this._price = price;
        this._url = url;
    }
}

module.exports = item;