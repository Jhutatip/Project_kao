import mongoose from "mongoose";

const animalsSchema = new mongoose.Schema({
    name: {type: String,default: null},
    kingdom: {type: String,default: null},
    phylum: {type: String,default: null},
    class: {type: String,default: null},
    order: {type: String,default: null},
    family: {type: String,default: null},
    genus: {type: String,default: null},
    species: {type: String,default: null},
    from: {type: String,default: null},
    token: {type: String},
});

const animals = mongoose.model("user", animalsSchema);
export default animalsSchema;