# Socket.IO Chat Application using webpack 2

This application follows the Socket.IO tutorial (http://socket.io/get-started/chat/) to build the example chat application. It's just a fun way to begin learning about Socket.IO and webpack 2.

There's a step in the tutorial where it asks you to write JavaScript in the html file - this is where this project deviates slightly.

Instead of inline JavaScript, the project uses webpack 2 to bundle the client-side Socket.IO code and jQuery for use in the html file. Neat!

## Getting Started

### Prerequisites

- [Node.js and npm](nodejs.org) Node >= 6.9.4, npm >= 2.x.x

### Running the project

Install the project's dependencies:

```npm install```

Use webpack to build the bundle.js file:

```./node_modules/.bin/webpack public/javascripts/socket.js public/javascripts/bundle.js```

Start the server:

```node index.js```

Open two (or more) browser windows on port 3000.

Type a message and see that the message is displayed real-time in both windows.

Ta-da!
