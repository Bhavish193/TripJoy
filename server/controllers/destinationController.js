const destinations = require("../data/destinations.json");

const getDestinations = (req, res) => {
    res.json(destinations);
};

module.exports = {
    getDestinations,
};