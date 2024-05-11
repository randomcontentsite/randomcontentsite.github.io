// Function to generate a random YouTube video ID
function generateRandomVideoId() {
    // Sample characters to use in video IDs
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
    const idLength = 11; // YouTube video IDs are typically 11 characters long

    let videoId = '';
    for (let i = 0; i < idLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        videoId += characters[randomIndex];
    }

    return videoId;
}

// Function to generate a new random YouTube video URL
function generateRandomVideoUrl() {
    const videoId = generateRandomVideoId();
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

    return videoUrl;
}

// Function to display a random YouTube video URL
function displayRandomVideo() {
    const videoUrl = generateRandomVideoUrl();
    const videoContainer = document.getElementById('video-container');

    // Clear previous content
    videoContainer.innerHTML = '';

    // Create and append a link element
    const videoLink = document.createElement('a');
    videoLink.href = videoUrl;
    videoLink.textContent = videoUrl;
    videoLink.target = '_blank'; // Open link in a new tab

    videoContainer.appendChild(videoLink);
}

// Generate a random video URL when the page loads
window.onload = displayRandomVideo;
