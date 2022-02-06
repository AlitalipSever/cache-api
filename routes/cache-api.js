const router = require("express").Router()

//CACHE DATA FOR GIVEN KEY
router.get("/:id", async (req, res) => {
    console.log("CACHE DATA FOR GIVEN KEY");
    const id = req.params.id
    console.log(id);
})


//ALL STORED KEYS
router.get("/all", async (req, res) => {
    console.log("ALL STORED KEYS");
})

//CREATE/UPDATE KEY
router.put("/:id", async (req, res) => {
    console.log("CREATE/UPDATE KEY");
    const id = req.params.id
    console.log(id);
})

//REMOVE GIVEN KEY
router.delete("/:id", async (req, res) => {
    console.log("REMOVE GIVEN KEY");
    const id = req.params.id
    console.log(id);
})

//REMOVE ALL KEYS
router.delete("/all", async (req, res) => {
    console.log("REMOVE ALL KEYS");
    const id = req.params.id
    console.log(id);
})

module.exports = router