// Apply Distance Filter
function updateDistanceFilter() {
    const slider = document.getElementById("distance-slider");
    const distanceValue = document.getElementById("distance-value");
    const maxDistance = parseFloat(slider.value);
    distanceValue.textContent = maxDistance;

    const restaurants = document.querySelectorAll(".restaurant-item");
    restaurants.forEach(restaurant => {
        const distance = parseFloat(restaurant.querySelector("[id$='Miles']").textContent);
        if (distance > maxDistance) {
            restaurant.style.display = "none";
        } else {
            restaurant.style.display = "";
        }
    });
}

// Apply Price and Open Filters
function applyFilters() {
    const priceFilters = Array.from(document.querySelectorAll(".price-checkbox:checked")).map(cb => cb.value);
    const openNow = document.getElementById("filter-open-now").checked;

    const restaurants = document.querySelectorAll(".restaurant-item");
    restaurants.forEach(restaurant => {
        const price = restaurant.querySelector("[id$='Price']").textContent;
        const isOpen = restaurant.querySelector("[id$='Open']").textContent.toLowerCase() === "yes";

        const matchesPrice = priceFilters.length === 0 || priceFilters.includes(price);
        const matchesOpen = !openNow || isOpen;

        restaurant.style.display = matchesPrice && matchesOpen ? "" : "none";
    });
}

// Reset Filters
function resetFilters() {
    document.getElementById("distance-slider").value = 5;
    document.getElementById("distance-value").textContent = 5;
    document.querySelectorAll(".price-checkbox").forEach(cb => cb.checked = false);
    document.getElementById("filter-open-now").checked = false;

    const restaurants = document.querySelectorAll(".restaurant-item");
    restaurants.forEach(restaurant => {
        restaurant.style.display = "";
    });
}
