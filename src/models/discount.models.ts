import mongoose from "mongoose";

const discountSchema = new mongoose.Schema({
    id: {type: String,default: null},
    type: {type: String,default: null},
    start_data: {type: String,default: null},
    end_data: {type: String,default: null},
    token: {type: String},
});

const disconut = mongoose.model("user", discountSchema);
export default discountSchema;