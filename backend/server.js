const express = require("express");
const app = express();
const morgan = require("morgan");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const Emitter = require("events");

const PORT = process.env.PORT || 8000;

//import Routes
const menu = require("./routes/menuRoute");
const tableroute = require("./routes/tablesRoute");
const userRoute = require("./routes/userRoute");
const orderRoute = require("./routes/orderRoute");
const adminOrderListRoute = require("./routes/admin/adminOrderListRoute");

//cors policy
app.use(cors());

//database connection
connectDB();

//Event emitter
const eventEmitter = new Emitter();
//bind the event emitter
app.set("eventEmitter", eventEmitter);

//JSON
app.use(express.json());
app.use(morgan("dev"));

//routes register
app.use("/api/", menu);
app.use("/api/table", tableroute);
app.use("/api/auth/user", userRoute);
app.use("/api/order", orderRoute);

app.use("/api/admin/", adminOrderListRoute);

//test
app.get("/", (req, res) => {
  res.send("API is running...");
});

const server = app.listen(PORT, () => {
  console.log(`app running on ${PORT}`);
});

const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log("connected to socket.io");

  //order_sdfrhg4386538fg
  socket.on("join", (orderId) => {
    socket.join(orderId);
  });
});

eventEmitter.on("orderUpdated", (data) => {
  io.to(`order_${data.updatedData._id}`).emit("orderUpdated", data.updatedData);
  //  console.log(data.updatedData._id);
});

//diplay the orders at real time in admin side
eventEmitter.on("orderPlaced", (data) => {
  io.to("adminRoom").emit("orderPlaced", data);
});
