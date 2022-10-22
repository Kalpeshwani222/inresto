const express = require("express");
const app = express();
const morgan = require("morgan");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const PORT = process.env.PORT || 8000;


//import Routes
const menu = require("./routes/menuRoute");
const tableroute = require("./routes/tablesRoute");
const userRoute = require("./routes/userRoute");
const orderRoute = require("./routes/orderRoute");
const adminOrderListRoute = require("./routes/admin/adminOrderListRoute")
//cors policy
app.use(cors());



//database connection
connectDB();

//JSON
app.use(express.json());
app.use(morgan('dev'))


//routes register
app.use("/api/", menu);
app.use("/api/table",tableroute);
app.use('/api/auth/user',userRoute);
app.use('/api/order',orderRoute);


app.use('/api/admin/',adminOrderListRoute);



//test
app.get("/", (req, res) => {
  res.send("API is running...");
});




app.listen(PORT, () => {
  console.log(`app running on ${PORT}`);
});
