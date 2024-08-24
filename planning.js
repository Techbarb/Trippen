document.addEventListener('DOMContentLoaded', () => {
    // Retrieve preferences from localStorage
    const dates = JSON.parse(localStorage.getItem('dates'));
    const budget = localStorage.getItem('budget');
    const currency = localStorage.getItem('currency');
    const preferences = JSON.parse(localStorage.getItem('preferences'));

    // Display trip suggestions based on the retrieved preferences
    const tripSuggestions = document.getElementById('tripSuggestions');

    // Example trip data (replace with real data or fetch from an API)
    const trips = [
        { location: 'Hawaii', type: 'Beach Vacation', cost: 1500 },
        { location: 'Swiss Alps', type: 'Adventure Tourism', cost: 2500 },
        { location: 'Paris', type: 'Cultural Tourism & Vacation', cost: 2000 },
        // Add more trips as needed
    ];

    let suggestions = trips.filter(trip => preferences.includes(trip.type) && trip.cost <= budget);

    // Display the matching trips
    if (suggestions.length > 0) {
        suggestions.forEach(trip => {
            const tripElement = document.createElement('div');
            tripElement.classList.add('trip');
            tripElement.innerHTML = `
                <h2>${trip.location}</h2>
                <p>Type: ${trip.type}</p>
                <p>Cost: ${currency} ${trip.cost}</p>
            `;
            tripSuggestions.appendChild(tripElement);
        });
    } else {
        tripSuggestions.innerHTML = '<p>No matching trips found.</p>';
    }
});

