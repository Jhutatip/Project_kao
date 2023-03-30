import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    ad_name: {type: String,default: null},
    ad_lastname: {type: String,default: null},
    ad_tel: {type: String,default: null},
    ad_email: {type: String,unique: true},
    ad_password: {type: String},
    token: {type: String},
});

const User = mongoose.model("user", userSchema);
export default User;