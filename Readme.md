# Stream deck

This project is a live streaming application that captures video and audio from the user's device and streams it to a YouTube RTMP server using `ffmpeg`.

## Prerequisites

- Docker
- Node.js
- npm

## Getting Started

### Clone the Repository


git clone https://github.com/yourusername/your-repo.git



### Build and Run the Docker Container
Build and Run the Docker Container

### Install Dependencies
If you are running the application locally without Docker, install the dependencies:

npm install

###  Start the Application

npm start


### Usage
Open your browser and navigate to http://localhost:3000.
Allow access to your camera and microphone.
Click the "Start" button to begin streaming.

###  Project Structure
Dockerfile: Docker configuration file to build the application image.
public/script.js: Client-side JavaScript to capture media and send it to the server.
index.js: Server-side code to handle incoming media streams and forward them to ffmpeg.
.gitignore: Specifies files and directories to be ignored by Git.
