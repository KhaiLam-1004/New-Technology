// index.js
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const indexRoute = require("./routes/indexRoute");

const PORT = 5000;

app.use(bodyParser.json());
app.use("/", indexRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
