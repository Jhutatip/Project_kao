import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    member_name: {type: String,default: null},
    member_lastname: {type: String,default: null},
    member_tel: {type: String,default: null},
    member_id: {type: String,default: null},
    member_email: {type: String,unique: true},
    member_password: {type: String,default: null},
    token: {type: String},
});

const User = mongoose.model("user", userSchema);
export default User;