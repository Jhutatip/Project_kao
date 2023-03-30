import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    order_id: {type: String,default: null},
    order_data: {type: String,default: null},
    status_pay: {type: String,default: null},   
    token: {type: String},
});

const order = mongoose.model("order", orderSchema);
export default order;