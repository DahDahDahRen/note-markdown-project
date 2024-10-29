const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./db/connectDB");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/", (req, res) => {
  res.status(202).json({ msg: "Hello World" });
});

async function startServer() {
  try {
    await connectDB();

    app.listen(process.env.PORT, () => {
      console.log("Hello World! Server is running in this server!");
    });
  } catch (error) {
    console.log(error);
  }
}

startServer();
