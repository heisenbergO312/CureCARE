// Dotenv Configuration
require("dotenv").config();
const mongoURL = process.env.MONGO_URL;
const port = process.env.PORT || 4000;

// Imports
const express = require("express");
const app = express();
const cors = require("cors");
const { createServer } = require("http");
const { Server } = require("socket.io");
const { default: mongoose, mongo } = require("mongoose");
const userRoutes = require("./Routes/UserRoute");
const doctorRoutes = require("./Routes/DoctorRoute");
//Middlewares
app.use(cors());
app.use(express.json());
app.use("/api/auth", userRoutes);
app.use("/api/doctor", doctorRoutes);

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

// Listening
mongoose
  .connect(mongoURL)
  .then(() => {
    io.on("connection", (socket) => {
      socket.on("join-room", (roomid) => {
        socket.join(roomid);
      });

      socket.on("updateDoc", (payload, roomid) => {
        io.to(roomid).emit("updatedDoc", payload);
      });

      socket.on("msg", (payload, roomid) => {
        io.to(roomid).emit("msg", payload);
      });
    });

    httpServer.listen(4000);
    console.log("Connected to DB and listening to port 4000");
  })
  .catch((err) => {
    console.log("Error while connecting to Database", err);
  });
