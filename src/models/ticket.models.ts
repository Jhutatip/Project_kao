import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
    id: {type: String,default: null},
    type: {type: String,default: null},
    price: {type: String},
    token: {type: String},
});

const ticket = mongoose.model("ticket", ticketSchema);
export default ticket;