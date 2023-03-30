import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
    news_id: {type: String,default: null},
    news_title: {type: String,default: null},
    news_content: {type: String,default: null},
    data_time: {type: String,default: null},
    token: {type: String},
});

const news = mongoose.model("user",newsSchema);
export default newsSchema;