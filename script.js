// Function to generate a random YouTube video ID
function generateRandomVideoId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
    const idLength = 11;

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

// Function to check if a YouTube video exists
async function checkVideoExists(videoId) {
    const apiKey = 'YOUR_YOUTUBE_API_KEY'; // Replace with your YouTube Data API key
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${AIzaSyC3mtxrKFZLVICHkax7579rZwmVCegx6SU]}&part=snippet`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.items && data.items.length > 0) {
            return true; // Video exists
        } else {
            return false; // Video does not exist
        }
    } catch (error) {
        console.error('Error checking video existence:', error);
        return false; // Error occurred while checking video existence
    }
}

// Function to display a random YouTube video URL (if video exists)
async function displayRandomVideo() {
    let videoExists = false;
    let videoUrl = '';

    while (!videoExists) {
        const videoId = generateRandomVideoId();
        videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
        videoExists = await checkVideoExists(videoId);
    }

    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = ''; // Clear previous content

    const videoLink = document.createElement('a');
    videoLink.href = videoUrl;
    videoLink.textContent = videoUrl;
    videoLink.target = '_blank'; // Open link in a new tab

    videoContainer.appendChild(videoLink);
}

// Generate a random video URL when the page loads
window.onload = displayRandomVideo;
