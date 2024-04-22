// This file is used to set a random background image for the website.
// Append as script:
// <script src="background.js"></script>

// Define an array with the background image URLs
    const backgrounds = [
        'resources/background1.png',
        'resources/background2.png',
        'resources/background3.png',
        'resources/background4.png',
        'resources/background5.png'
    ];

    // Get a random index to select a background
    const randomIndex = Math.floor(Math.random() * backgrounds.length);

    // Set the body background to the selected random image
    document.body.style.backgroundImage = `url('${backgrounds[randomIndex]}')`;