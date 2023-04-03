import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    id: {type: String,default: null},
    data: {type: String,default: null},
    pay: {type: String,default: null},   
    token: {type: String},
});

const order = mongoose.model("order", orderSchema);
export default order;