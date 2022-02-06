
const cacheDataGivenKey = async (req, res) => {
    console.log("CACHE DATA FOR GIVEN KEY");
    const id = req.params.id
    res.status(200).json(id)
    console.log(id);
}


module.exports = {cacheDataGivenKey}