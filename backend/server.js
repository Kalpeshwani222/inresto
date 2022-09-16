const express = require("express");
const app = express();
const morgan = require("morgan");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const menu = require("./routes/menuRoute");
const tableroute = require("./routes/tablesRoute");
const PORT = process.env.PORT || 8000;

//cors policy
app.use(cors());



//database connection
connectDB();

//JSON
app.use(express.json());
app.use(morgan('dev'))

app.use("/api/", menu);
app.use("/api/table",tableroute);

app.get("/", (req, res) => {
  res.send("API is running...");
});




app.listen(PORT, () => {
  console.log(`app running on ${PORT}`);
});
