require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const connectDb = require("./db/connection");

const mongo_url = process.env.DB_URL;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(require("./routes/userRoute"));
app.use(require("./routes/jobsRoute"));

// require("./db/connection");
connectDb(mongo_url);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
});
