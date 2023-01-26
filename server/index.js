const express = require("express");

const bodyParser = require("body-parser");
const cors = require("cors");
const configRoute = require("./src/routes/route");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
configRoute(app);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
