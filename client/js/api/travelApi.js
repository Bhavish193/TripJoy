// FETCH DATA
const API_URL = "https://tripjoy-production.up.railway.app/api";

async function fetchData(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Failed to load data from ${url}`);
    }

    return await response.json();
}

// DESTINATIONS
export function getDestinations() {
    return fetchData(`${API_URL}/destinations`);
}

// HOTELS
export function getHotels() {
    return fetchData(`${API_URL}/hotels`);
}

// PACKAGES
export function getPackages() {
    return fetchData("./data/packages.json");
}