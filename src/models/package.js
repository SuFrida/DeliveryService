import { Schema, model } from "mongoose";

const schema = new Schema({
    id_package: {
        type: Number,
        required: true
    },
    id_product: {
        type: Number
    },
    id_purchase: {
        type: Number
    },
    product_location: {
        type: String
    },
    final_location: {
        type: String
    }
})

export default model('package', schema)