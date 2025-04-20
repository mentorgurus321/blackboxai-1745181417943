const axios = require('axios');
const config = require('./config');

// Fetch latest videos from YouTube channel
async function fetchLatestYouTubeVideos() {
  const url = "https://www.googleapis.com/youtube/v3/search?key=" + config.youtubeApiKey + "&channelId=" + config.youtubeChannelId + "&part=snippet,id&order=date&maxResults=5";
  try {
    const response = await axios.get(url);
    return response.data.items.filter(item => item.id.kind === 'youtube#video');
  } catch (error) {
    console.error('Error fetching YouTube videos:', error.response ? error.response.data : error.message);
    return [];
  }
}

// Placeholder function to post to Facebook
async function postToFacebook(video) {
  console.log('Posting to Facebook:', video.snippet.title);
  // Implement Facebook Graph API post here
}

// Placeholder function to post to Instagram
async function postToInstagram(video) {
  console.log('Posting to Instagram:', video.snippet.title);
  // Implement Instagram Graph API post here
}

// Placeholder function to post to X (Twitter)
async function postToX(video) {
  console.log('Posting to X:', video.snippet.title);
  // Implement X API post here
}

// Placeholder function to post to Threads
async function postToThreads(video) {
  console.log('Posting to Threads:', video.snippet.title);
  // Implement Threads API post here
}

// Placeholder function to post to Pinterest
async function postToPinterest(video) {
  console.log('Posting to Pinterest:', video.snippet.title);
  // Implement Pinterest API post here
}

async function main() {
  const videos = await fetchLatestYouTubeVideos();
  for (const video of videos) {
    await postToFacebook(video);
    await postToInstagram(video);
    await postToX(video);
    await postToThreads(video);
    await postToPinterest(video);
  }
}

main();
