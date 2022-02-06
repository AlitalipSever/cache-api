const CacheData = require("../models/CacheData")
const {json} = require("express");


const cacheDataGivenKey = async (req, res) => {
    const dataId = req.body.id
    try {
        if(dataId){
            const cacheData = await CacheData.findById(dataId)
            res.status(200).json(cacheData.data)
            console.log(cacheData);
        }else {
            res.status(500).json("send id")              //TODO fix the errors
        }
    }catch (e) {
        console.log("Cache miss");                  //TODO add colorize to logs
        const data = Math.random().toString(36).substr(5, 50);  //TODO add cool random string generator func
        const dataObj = {
            data: data
        }
        const newCacheData = new CacheData(dataObj)
        const savedCacheData = await newCacheData.save()
        res.status(201).json(savedCacheData)            //TODO send only data string
    }

}






module.exports = {cacheDataGivenKey}