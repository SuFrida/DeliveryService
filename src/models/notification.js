import { Schema, model } from "mongoose";

const schema = new Schema({
    id_notif: {
        type: Number,
        required: true
    },
    message: {
        type: String
    },
    id_employee: {
        type: Number
    },
    id_package: {
        type: Number
    }
}, {
    timestamps: true
})

export default model('notification', schema)