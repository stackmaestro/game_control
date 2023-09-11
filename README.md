# three.js Task
​
## Problem Statement
​ Create web interface for Game Control on Mobile Phone web browser
### The Task
1. Using modern libraries like ReactJS.
2. Use websockets for communication between controller-frontend on a mobile phone and a Node.js backend
3. Frontend will have a page that shows a colored graphic cube that can be moved around by a conncected mobile phone controller.
4. A separate page for controller will be needed, and will make the connection to the backend for controlling.
5. UI and layout should be responsive.
6. Post project on github or send privately.

### The solution
1. ReactJS is used for the frontend.
2. Socket.IO is used for web socket communication.
* On changing position of the Colored Graphic cube, the socket is signaled new positions
* On recieveing new signal on backend, socket broadcasts the new positions to each connected socket client
3. A colored cube is created using three.js library
4. A controller page is provided which can be used to move the cube in 4 directions: UP,DOWN,LEFT,RIGHT
* On changing of positions, the new data is signaled through websockets
* Backend then broadcasts the new positions to each socket client
5. UI and layout are made responsive
6. In order to keep the cube position in sync, an API is provided in backend
which provides current cube positions each time new client loads.
​
### Built With
​
* [Node](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [dotenv](https://jestjs.io/)
* [nodemon](https://nodemon.io/)
* [Socket.IO][https://socket.io/]
* [three.js][https://threejs.org/]
* [React][https://reactjs.org/]

------------
​
## Getting Started
​
To get a local copy up and running follow these simple steps.
​
### Prerequisites
​
1.  Server
  *  `cors: ^2.8.5`
  *  `dotenv: ^16.0.3`
  *  `express: ^4.17.3`
  *  `nodemon: ^2.0.15`
  *  `socket.io: ^4.4.1`
2. Client
  *  `react: ^18.2.0`
  *  `react-dom: ^18.2.0`
  *  `react-router: ^6.4.3`
  *  `react-router-dom: ^6.4.3`
  *  `react-scripts: 5.0.0`
  *  `socket.io-client: ^4.4.1`
  *  `three: ^0.146.0`
### Installation
​
1. Extract The Zip File.
​
2. Move into the project directory
`cd threejs-task`
​
3. Install dependencies in server
`cd server`
`npm install`

4. Install dependencies in client by opening a separate terminal
​`cd client`
`npm install`

5. Enter env varaibles in .env file in server.
`BROWSER_URL`=`URl with IPV4 IP of the connected internet and port on which browser is running e.g. http://11.11.11.11:3000`
`PORT`=`The port on which server is running`

6. Enter config in client side, go to src/config/index.js and enter
`SERVER_URL`=`URL with IPV4 IP of the connected internet and port on which server is running e.g. http://11.11.11.11:4000`

7. Start the server
* `nodemon`

8. Start the client
* `npm start`
​
## API Docs
### URL:
  * Method: GET
  * URL: https://API_BASE_URL/api/positions

### Response Payload

  {
    "x": INTEGER,
    "y": INTEGER
  }
