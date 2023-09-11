require("dotenv").config({ path: './.env' });
const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const config = require("./config");

app.use(cors());

const server = http.createServer(app);
let positions = {
  x: 0,
  y: 0
}

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("send_position", (data) => {
    positions['x'] = data['x'];
    positions['y'] = data['y'];
    socket.broadcast.emit("receive_position", data);
  });
});

app.get('/api/positions',(req,res)=>{
  res.status(200).send(JSON.stringify(positions));
})

server.listen(config.PORT || 4000, () => {
  console.log("SERVER IS RUNNING");
});
