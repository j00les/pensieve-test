const express = require("express");
const app = express();
const PORT = 3000;
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

app.listen(PORT, () => {
  console.log("Running at =>", PORT);
});
