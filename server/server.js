const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const connectDB = require("./config/db");
connectDB();

const PORT = 5000 || process.env.PORT;

app.use(helmet());
app.use(morgan("common"));

app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);
});
