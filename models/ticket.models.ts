import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
    ticket_id: {type: String,default: null},
    ticket_type: {type: String,default: null},
    ticket_price: {type: String},
    token: {type: String},
});

const ticket = mongoose.model("ticket", ticketSchema);
export default ticket;