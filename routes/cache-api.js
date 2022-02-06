const {verifyTokenAndAdmin, verifyToken} = require("../middlewares/verify-token")
const {cacheDataGivenKey, allStoredKeys, createAndUpdateKey, removeGivenKey, removeAllKeys} = require("../controllers/cache-service")
const router = require("express").Router()

//CACHE DATA FOR GIVEN KEY
router.post("/getData", verifyTokenAndAdmin, cacheDataGivenKey)

//ALL STORED KEYS
router.get("/all", verifyTokenAndAdmin, allStoredKeys)

//CREATE/UPDATE KEY
router.put("/createAndUpdate", verifyTokenAndAdmin, createAndUpdateKey)

//REMOVE GIVEN KEY
router.delete("/removeKey", verifyTokenAndAdmin, removeGivenKey)

//REMOVE ALL KEYS
router.delete("/all", verifyTokenAndAdmin, removeAllKeys)

module.exports = router