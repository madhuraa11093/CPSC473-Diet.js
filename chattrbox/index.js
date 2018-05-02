/*eslint-env node*/
var wss = require("./websockets-server");
var Mime = require("mime-types");
var server = require("diet");
var app = server();
app.listen("http://localhost:8000");

// Require the diet-static module and configure it
var static = require("diet-static")({
  path: app.path + "/app"
});

app.view("file", static);

app.missing(function($) {
  $.redirect("/error.html");
});

app.get("/", function($) {
  $.redirect("index.html");
});
