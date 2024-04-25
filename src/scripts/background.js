// This file is used to set a random background image for the website.
// Append as script:
// <script src="background.js"></script>

// Define an array with the background image URLs
    const backgrounds = [
        'resources/background1-lq.jpg',
        'resources/background2-lq.jpg',
        'resources/background3-lq.jpg',
        'resources/background4-lq.jpg',
        'resources/background5-lq.jpg'
    ];

    // Get a random index to select a background
    const randomIndex = Math.floor(Math.random() * backgrounds.length);

    // Set the body background to the selected random image
    document.body.style.backgroundImage = `url('${backgrounds[randomIndex]}')`;