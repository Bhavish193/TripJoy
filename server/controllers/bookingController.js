const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/bookings.json");

const createBooking = (req, res) => {

    const booking = req.body;

    if (
        !booking.name ||
        !booking.email ||
        !booking.destination ||
        !booking.date ||
        !booking.guests
    ) {
        return res.status(400).json({
            success: false,
            message: "Please fill all fields."
        });
    }

    const bookings = JSON.parse(fs.readFileSync(filePath));

    booking.id = Date.now();

    bookings.push(booking);

    fs.writeFileSync(filePath, JSON.stringify(bookings, null, 2));

    res.status(201).json({
        success: true,
        message: "Booking Successful!",
        booking
    });

};

module.exports = {
    createBooking
};