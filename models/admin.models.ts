import mongoose from "mongoose";

interface admin extends Document {
    username: string;
    password: string;
    email: string;
  }

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