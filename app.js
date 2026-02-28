const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const contactRouter = require("./app/routes/contact.route");
app.use("/api/contacts", contactRouter);

app.get("/", (req, res) => {
  res.send("Chào mừng đến với ContactBook API!");
});

module.exports = app;
