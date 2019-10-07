const express = require("express");
const path = require("path");
const expressStaticGzip = require("express-static-gzip");
const app = express();

const publicPath = path.resolve(__dirname + "/dist");

app.use("/", expressStaticGzip(publicPath));

app.use(express.static(publicPath));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(9000);
