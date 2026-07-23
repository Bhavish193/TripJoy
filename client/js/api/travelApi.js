// FETCH DATA
async function fetchData(url) {

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to load data from ${url}`);
    }
    return await response.json();
}


// DESTINATIONS
export function getDestinations() {
    return fetchData("http://localhost:3000/api/destinations");
}


// HOTELS
export function getHotels() {
    return fetchData("http://localhost:3000/api/hotels");
}


// PACKAGES
export function getPackages() {
    return fetchData("./data/packages.json");
}