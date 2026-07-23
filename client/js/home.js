import {
    getDestinations, getHotels
} from "./api/travelApi.js";


// LOAD DESTINATIONS
async function loadDestinations() {
    try {

        const destinations = await getDestinations();
        const destinationContainer = document.querySelector(".destination-cards");
        destinationContainer.innerHTML = "";
        destinations.forEach((destination) => {

            const card = document.createElement("div");
            card.className = "destination-card";
            card.innerHTML = `
                <img src="${destination.image}" alt="${destination.name}">
                <div class="destination-info">

                    <h3>${destination.name}</h3>
                    <p class="destination-location">
                        📍 ${destination.location}
                    </p>
                    <p class="destination-details">
                        ${destination.days}
                    </p>
                    <p class="destination-price">
                        ${destination.price}
                    </p>
                    <a href="booking.html" class="btn btn-primary">
                        Book Now
                    </a>
                </div>
            `;
            destinationContainer.appendChild(card);
        });
    }

    catch (error) {
        console.error("Error loading destinations:", error);
    }

}
loadDestinations();


async function loadHotels() {
    try {

        const hotels = await getHotels();
        const hotelContainer = document.querySelector(".hotel-cards");

        hotelContainer.innerHTML = "";
        hotels.forEach((hotel) => {

            const card = document.createElement("article");
            card.className = "hotel-card";
            card.innerHTML = `
                <img src="${hotel.image}" alt="${hotel.name}">

                <div class="hotel-info">
                    <h3>${hotel.name}</h3>
                    <p class="hotel-location">
                        ${hotel.location}
                    </p>

                    <p class="hotel-rating">
                        ⭐ ${hotel.rating}
                    </p>

                    <p class="hotel-price">
                        From ${hotel.price}
                    </p>

                    <a href="hotels.html" class="btn btn-primary">
                        View Hotel
                    </a>
                </div>
            `;
            hotelContainer.appendChild(card);
        });
    }

    catch (error) {
        console.error("Error loading hotels:", error);
    }
}

loadHotels();