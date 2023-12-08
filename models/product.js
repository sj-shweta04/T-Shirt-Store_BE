const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please provide product name'],
        trim: true,
        maxLength: [140, 'product name should not be more than 140 characters'],
    },
    price: {
        type: Number,
        required: [true, 'please provide product price'],
        maxLength: [6, 'product price should not be more than 6 digits'],
    },
    description: {
        type: String,
        required: [true, 'please provide product description'],
    },
    photos: [
        {
            id: {
                type: String,
                required: true
            },
            secure_url: {
                type: String,
                required: true
            },
        }
    ],
    category: {
        type: String,
        required: [true, 'please select category from - short-sleeves, long-sleeves, sweat-shirts, hoodies'],
        enum: {
            values: [
                'longsleeves',
                'shortsleeves',
                'sweatshirt',
                'hoodie'
            ],
            message: 'please select category from - short-sleeves, long-sleeves, sweat-shirts, hoodies'
        }
    },
    stock: {
        type: Number,
        required: [true, 'please enter stock in number']
    },
    brand:{
        type: String,
        required: [true, 'please add a brand for clothing'],
    },
    ratings:{
        type: Number,
        default: 0
    },
    numberOfReviews:{
        type: Number,
        default: 0
    },
    reviews:[
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: 'User',
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            rating: {
                type: Number,
                required: true,
            },
            comment: {
                type: String,
                required: true,
            },
        }
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

//In mongoDB Collection name will be "products" As per rule.
module.exports = mongoose.model('Product', productSchema);