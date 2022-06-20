import { Schema, model } from "mongoose";

const schema = new Schema({
    id_employee: {
        type: Number,
        required: true
    },
    name: {
        type: String
    },
    lastname: {
        type: String
    },
    job: {
        type: String
    }
})

export default model('employee', schema)