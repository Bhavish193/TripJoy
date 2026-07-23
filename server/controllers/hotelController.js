const path = require("path");

const hotels = require(path.join(__dirname, "../data/hotels.json"));

const getHotels = (req, res) => {
    res.status(200).json(hotels);
};

module.exports = {
    getHotels
};