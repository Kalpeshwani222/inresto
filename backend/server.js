const express = require("express");
const app = express();
const morgan = require("morgan");
const createError = require('http-errors');
const {VerifyAccessToken} = require("./helpers/jwt_helper");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const Emitter = require("events");
const PORT = process.env.PORT || 8000;

//import Routes
const menu = require("./routes/user/menuRoute");
const tableroute = require("./routes/admin/tablesRoute");
const userRoute = require("./routes/user/userRoute");
const orderRoute = require("./routes/user/orders/orderRoute");
const adminOrderListRoute = require("./routes/admin/adminOrderListRoute");
const categoryRoute = require("./routes/admin/categoryRoute");
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
app.use("/api/admin/", categoryRoute);
//test
app.get("/", VerifyAccessToken,(req, res) => {
  res.send("OK");
}); 


app.use(async (req,res,next) =>{
  // const error = new Error("Not found");
  // error.status = 404   
   // next(error)
  next(createError.NotFound())
})

//handling error
app.use((err,req,res,next)=>{
    res.status(err.status || 500);
    res.send({
        error :{
            status: err.status || 500,
            message: err.message,
        }
    })
})

//create server
const server = app.listen(PORT, () => {
  console.log(`app running on ${PORT}`);
});

//socket io connection
const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: process.env.REACT_APP_URL,
  },
});

io.on("connection", (socket) => {
  console.log("connected to socket.io");

  //join the room order_sdfrhg4386538fg 
  socket.on("join", (orderId) => {
    socket.join(orderId);
  });
});

//real time order update status in user sidd
eventEmitter.on("orderUpdated", (data) => {
  io.to(`order_${data.updatedData._id}`).emit("orderUpdated", data.updatedData);
  //  console.log(data.updatedData._id);
});

//diplay the orders at real time in admin side
eventEmitter.on("orderPlaced", (data) => {
  io.to("adminRoom").emit("orderPlaced", data);
});

//diplay the orders at real time in admin side
eventEmitter.on("tableBook", (data) => {
  io.to("adminRoom").emit("tableBook", data);
});
