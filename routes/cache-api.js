const {verifyTokenAndAdmin, verifyToken} = require("../middlewares/verify-token")
const {cacheDataGivenKey, allStoredKeys, createAndUpdateKey} = require("../controllers/cache-service")
const router = require("express").Router()

//CACHE DATA FOR GIVEN KEY
router.post("/getData", verifyTokenAndAdmin, cacheDataGivenKey)


//ALL STORED KEYS
router.get("/all", verifyTokenAndAdmin, allStoredKeys)

//CREATE/UPDATE KEY
router.put("/createAndUpdate", verifyTokenAndAdmin, createAndUpdateKey)

//REMOVE GIVEN KEY
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    console.log("REMOVE GIVEN KEY");
    const id = req.params.id
    console.log(id);
})

//REMOVE ALL KEYS
router.delete("/all", verifyTokenAndAdmin, async (req, res) => {
    console.log("REMOVE ALL KEYS");
    const id = req.params.id
    console.log(id);
})

module.exports = router