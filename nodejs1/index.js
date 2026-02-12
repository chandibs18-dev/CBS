const express = require("express");
const EventEmitter = require("node:events");
const connectDB = require("./db");
const postRouter = require("./post"); // your API routes

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Mount router
app.use("/api/post", postRouter);

// GameRoom
class GameRoom extends EventEmitter {
  constructor(roomId) {
    super();
    this.roomId = roomId;
    this.players = [];
  }

  join(player) {
    this.players.push(player);
    this.emit("playerJoined", player);
  }

  leave(player) {
    const index = this.players.indexOf(player);
    if (index !== -1) {
      this.players.splice(index, 1);
      this.emit("playerLeft", player);
    }
  }
}

// Start server and DB
const startApp = async () => {
  await connectDB();

  const room = new GameRoom("room1");

  room.on("playerJoined", (player) => {
    console.log(`Welcome, ${player} joined the room`);
  });

  room.on("playerLeft", (player) => {
    console.log(`${player} quit the game.`);
  });

  // Trigger events
  room.join("Alice");
  room.join("Bob");
  room.leave("Alice");

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Test route: http://localhost:${PORT}/api/post/hello`);
  });
};

startApp();
