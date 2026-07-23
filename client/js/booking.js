const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const bookingData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        destination: document.getElementById("destination").value,
        date: document.getElementById("checkIn").value,
        guests: Number(document.getElementById("guests").value)
    };

    try {
        const response = await fetch("http://localhost:3000/api/bookings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bookingData)
        });
        const data = await response.json();
        if (data.success) {
            alert("✅ Booking Successful!");
            bookingForm.reset();
        }
        else {
            alert(data.message);
        }
    }
    catch (error) {
        console.error(error);
        alert("Something went wrong.");
    }
});