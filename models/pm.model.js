const mongoose = require('mongoose');

const PMSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be at least 3 characters"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [10, "Description must be longer than 10 characters"]
    }
}, {timestamps: true});

const ProductManager = mongoose.model('ProductManager', PMSchema)
module.exports = ProductManager