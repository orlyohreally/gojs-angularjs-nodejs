var Express = require("express");
var Path = require("path");

// App
var app = Express();

app.get("/api/data", function(req, res) {
  let data = require("./data");
  res.status(200).json(data);
});

// sending the main page of the app
app.get("*", function(req, res) {
  res.sendFile(Path.join(__dirname, "./index.html"));
});

app.listen(3000, function() {
  console.log("Listening on port 3000");
});
