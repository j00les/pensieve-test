const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
});

app.listen(port, () => {
  console.log("running in =>", port);
});
