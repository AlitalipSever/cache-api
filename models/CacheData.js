const mongoose = require("mongoose")

const CacheDataSchema = new mongoose.Schema({
        data: {type: String, required:true},            //TODO data owner can be add


    },
    {timestamps:true},

);

module.exports = mongoose.model("CacheData", CacheDataSchema)