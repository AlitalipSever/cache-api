const CacheData = require("../models/CacheData")

const DOCS_NUMBER_LIMIT = 5

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

const allStoredKeys = async (req, res) => {
  try {
      const cachedDatas = await CacheData.find().sort({createdAt:-1})
      res.status(200).json(cachedDatas)
  }catch (e) {
      res.status(500).json("data not found")
  }
}

const createAndUpdateKey = async (req, res) => {
  try {
      const dataId = req.body.id
      const data = req.body.data

      if(dataId && data) {

          CacheData.count({}, async function (err, count) {           // get number counts all docs
              if (count > DOCS_NUMBER_LIMIT) {                                                             // if the specified number exceeds
                  CacheData.findOne({}, [], {$orderby: {'updatedAt': -1}}, async function (err, lastDoc) {
                                                                                                            // get last updated doc
                      const updatedData = await CacheData.findByIdAndUpdate(
                          lastDoc.id,                                               // update to over last updated doc
                          //TODO Add id null check
                          {
                              $set: {data: data}
                          },
                          {new: true}
                      );
                      res.status(200).json(updatedData)             //TODO fix error sending
                  });
              } else {
                  CacheData.count({}, async function (err, count) {  // get number counts all docs
                      if (count === 0) {
                          const data = req.body.data
                          const dataObj = {
                              data: data,
                          }
                          const newCacheData = new CacheData(dataObj)
                          const savedCacheData = await newCacheData.save()
                          res.status(201).json(savedCacheData)                   //TODO send only data string
                      } else {
                          const updatedData = await CacheData.findByIdAndUpdate(              // if the specified number NOT exceeds
                              dataId,                                                      // update normal way
                              //TODO Add id null check
                              {
                                  $set: {data: data}
                              },
                              {new: true}
                          );
                          res.status(200).json(updatedData)                 //TODO fix error sending
                      }

                  })
              }
          });
      } else {
          CacheData.count({}, async function(err, count){
              if(count>DOCS_NUMBER_LIMIT){                              // if the specified number exceeds
                  CacheData.findOne({}, [], { $orderby : { 'updatedAt' : -1 } }, async function(err, lastDoc) {
                      const updatedData = await CacheData.findByIdAndUpdate(
                          lastDoc.id,                                   // update last doc
                          //TODO Add id null check
                          {
                              $set: {data: data}
                          },
                          {new:true}
                      );
                      res.status(200).json(updatedData)             //TODO fix error sending
                  });
              }else {
                  const data = req.body.data
                  const dataObj = {                             // NOT exceeds get data and write CREATE new doc with NEW Id
                      data: data,
                  }
                  const newCacheData = new CacheData(dataObj)
                  const savedCacheData = await newCacheData.save()
                  res.status(201).json(savedCacheData)                   //TODO send only data string
              }
          })
      }

  }catch (e) {

  }
}

const removeGivenKey = async (req, res) => {
    try{
        await CacheData.findByIdAndDelete(req.body.id)      //TODO add body check
        res.status(200).json("cache key has been deleted")
    }catch (e) {
        res.status(500).json(e)
    }
}

const removeAllKeys = async (req, res) => {
  try {
      await CacheData.deleteMany({})      //TODO add body check
      res.status(200).json("cache keys has been deleted")
  }catch (e) {
      res.status(500).json(e)
  }
}






module.exports = {
    cacheDataGivenKey,
    allStoredKeys,
    createAndUpdateKey,
    removeGivenKey,
    removeAllKeys
}