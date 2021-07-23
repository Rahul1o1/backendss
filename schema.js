const mongoose = require("mongoose");

const { Schema } = mongoose;

const productsSchema = new Schema({
    title: {
        type: String,
        minlenght: 2,
        required: true
    },
    description : {
        type: String,
        minlenght: 2,
        required: true
    },
    name: {
        type: String,
        minlenght: 2,
        required: true
    },
    email: {
        type: String,
        minlenght: 2,
        required: true
    }
})
productsSchema.path('email').validate((val) => {
    return validator.validate(val);
},'Invalid Email');
module.exports = productsSchema