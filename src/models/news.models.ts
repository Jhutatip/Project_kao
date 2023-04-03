import mongoose from "mongoose";

const Schema = mongoose.Schema

const newsSchema = new Schema({
    id: { type: String, required: true},
    title: { type: String, required: true},
    content: { type: String, required: true},
    time: { type: String, required: true},
    token: {type: String},
});

export default mongoose.model("news",newsSchema);