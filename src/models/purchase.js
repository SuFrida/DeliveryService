import { Schema, model } from "mongoose";

const schema = new Schema({
    id_purchase: {
        type: Number,
        required: true
    },
    id_product: {
        type: Number
    },
    quantity: {
        type: Number
    }
}, {
    timestamps: true
})

export default model('purchase', schema)