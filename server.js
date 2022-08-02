const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const chalk = require("chalk");
const log = console.log;
const mailRoute = require("./routes/mailRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.COMPASS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    log(chalk.black.bgGreen(" Database Connected Successfully "));
  })
  .catch((err) => {
    log(
      chalk.black.bgGreen(" Database Connection Failed " + err.message + " ")
    );
  });

app.use("/api/mail", mailRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
