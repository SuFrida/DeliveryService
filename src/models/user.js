import { Schema, model } from "mongoose";

const schema = new Schema({
    id_user: {
        type: Number,
        required: true
    },
    name: {
        type: String
    },
    password: {
        type: String
    },
    id_package: {
        type: Number
    }
})

export default model('user', schema)