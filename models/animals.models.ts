import mongoose from "mongoose";

const animalsSchema = new mongoose.Schema({
    an_name: {type: String,default: null},
    an_kingdom: {type: String,default: null},
    an_phylum: {type: String,default: null},
    an_class: {type: String,default: null},
    an_order: {type: String,default: null},
    an_family: {type: String,default: null},
    an_genus: {type: String,default: null},
    species: {type: String,default: null},
    an_from: {type: String,default: null},
    token: {type: String},
});

const animals = mongoose.model("user", animalsSchema);
export default animalsSchema;