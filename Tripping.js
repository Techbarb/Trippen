// script.js
// Tripping.js
document.addEventListener('DOMContentLoaded', () => {
    const carousels = [
        {
            track: document.getElementById('carousel1'),
            prevButton: document.getElementById('prevBtn1'),
            nextButton: document.getElementById('nextBtn1')
        },
        {
            track: document.getElementById('carousel2'),
            prevButton: document.getElementById('prevBtn2'),
            nextButton: document.getElementById('nextBtn2')
        }
    ];

    carousels.forEach(carousel => {
        const track = carousel.track;
        const images = Array.from(track.children);
        const prevButton = carousel.prevButton;
        const nextButton = carousel.nextButton;

        let currentIndex = 0;

        const moveToImage = (index) => {
            track.style.transform = `translateX(-${index * 100}%)`;
            currentIndex = index;
        };

        // Move to the next image
        nextButton.addEventListener('click', () => {
            if (currentIndex < images.length - 1) {
                moveToImage(currentIndex + 1);
            } else {
                moveToImage(0); // loop back to the first image
            }
        });

        // Move to the previous image
        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                moveToImage(currentIndex - 1);
            } else {
                moveToImage(images.length - 1); // loop back to the last image
            }
        });
    });
});

document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-box').value;
    fetchResults(query);
});

function fetchResults(query) {
    // For demonstration, using static data. In a real app, you would fetch data from a server or an API.
    const data = {
        hotels: ["Hotel A", "Hotel B", "Hotel C"],
        activities: ["Activity A", "Activity B", "Activity C"],
        restaurants: ["Restaurant A", "Restaurant B", "Restaurant C"]
    };

    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    const categories = ['hotels', 'activities', 'restaurants'];
    categories.forEach(category => {
        const categoryData = data[category].filter(item => item.toLowerCase().includes(query.toLowerCase()));
        if (categoryData.length > 0) {
            const categoryTitle = document.createElement('h3');
            categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
            resultsContainer.appendChild(categoryTitle);

            categoryData.forEach(item => {
                const resultItem = document.createElement('div');
                resultItem.className = 'result-item';
                resultItem.textContent = item;
                resultsContainer.appendChild(resultItem);
            });
        }
    });
}

document.getElementById("profileIcon").addEventListener("click", function() {
    var dropdown = document.getElementById("profileDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

// Close the dropdown if the user clicks outside of it
window.addEventListener("click", function(event) {
    if (!event.target.matches('.profile-icon')) {
        var dropdowns = document.getElementsByClassName("dropdown-menu");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
});
