const express = require("express");
const ip = require("ip");
const morgan = require("morgan");
const path = require("path");
const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server started @ ${ip.address()}:${PORT}`)
);
