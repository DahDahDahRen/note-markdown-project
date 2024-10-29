const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./db/connectDB");
const noteRouter = require("./router/router");
const errorHandler = require("./middleware/errorHandler");
require("dotenv").config();

const app = express();

//* APP Level middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//* APP Router middleware
app.use("/api/v1", noteRouter);

//* APP custom error handler
app.use(errorHandler);

//* Start server
async function startServer() {
  try {
    //* Connect to DB
    await connectDB();

    //* Star server
    app.listen(process.env.PORT, () => {
      console.log("Hello World! Server is running in this server!");
    });
  } catch (error) {
    console.log(error);
  }
}

startServer();
