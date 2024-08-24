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
