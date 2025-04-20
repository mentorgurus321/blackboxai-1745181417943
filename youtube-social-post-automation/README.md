# YouTube to Social Media Post Automation

This project automates posting new YouTube videos to various social media platforms including Facebook, Instagram, X (formerly Twitter), Threads, and Pinterest.

## Features

- Fetch new videos from a specified YouTube channel.
- Post video links and descriptions to multiple social media platforms.
- Handles authentication for each platform.
- Easily extendable to add more platforms or customize posts.

## Setup

1. Obtain API credentials for YouTube, Facebook, Instagram, X, Threads, and Pinterest.
2. Fill in the `config.js` file with your API keys and tokens.
3. Run the script to start posting automatically.

## Usage

```bash
node index.js
```

## Notes

- Instagram posting requires Facebook Graph API with Instagram Business Account.
- Threads API is currently limited; this project uses placeholders for Threads.
- Ensure you comply with each platform's API usage policies.
