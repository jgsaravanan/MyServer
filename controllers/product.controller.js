const mongoose = require('mongoose');
const ProductSchema = require('../models/product.model');

//Simple version, without validation or sanitation
const controller = {};
controller.create = function (req, res, next) {
    let Product = mongoose.model('Product', ProductSchema);
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );
    let promise = product.save();
    let output = null;
    promise.then(result => {
        {
            console.log("Saved" + result);
            output = result;
            //return res.send('Product Created successfully');
        }
    }).catch(err => {
        console.log("error");
        //return next(err);
    }).finally(() => {
        res.send(output);
        console.log("completed")
    })
};

module.exports = {
    create: controller.create
};
