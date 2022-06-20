import { Schema, model } from "mongoose";

const schema = new Schema({
    id_package: {
        type: String,
        required: true
    },
    id_product: {
        type: String,
        required: true
    },
    id_purchase: {
        type: String,
        required: true
    },
    product_location: {
        type: String,
        required: true
    },
    final_location: {
        type: String,
        required: true
    },
    id_employee: {
        type: String,
        required: true
    }
})

export default model('package', schema);