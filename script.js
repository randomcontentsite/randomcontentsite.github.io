
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

// Function to check if a YouTube video exists
async function checkVideoExists(videoId) {
    const apiKey = 'AIzaSyC3mtxrKFZLVICHkax7579rZwmVCegx6SU';
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`;

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
        videoUrl = `https://www.youtube.com/embed/${videoId}`; // Use embed URL
        videoExists = await checkVideoExists(videoId);
    }

    const videoIframe = document.getElementById('youtube-video');
    videoIframe.src = videoUrl;
}

// Generate a random video URL when the page loads
window.onload = displayRandomVideo;

// Add event listener to the "Generate New Video" button
const generateButton = document.getElementById('generate-btn');
generateButton.addEventListener('click', displayRandomVideo);
