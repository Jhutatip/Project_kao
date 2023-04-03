import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String,default: null},
    lastname: {type: String,default: null},
    tel: {type: String,default: null},
    id: {type: String,default: null},
    email: {type: String,unique: true},
    password: {type: String,default: null},
    token: {type: String},
});

const User = mongoose.model("user", userSchema);
export default User;