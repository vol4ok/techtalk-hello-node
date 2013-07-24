var express = require("express");
var app = express();

app.use(express.bodyParser());
app.use(express.logger("tiny"));
app.use(app.router);
app.use(express.static(__dirname));
app.listen(8080);

app.get("/", function(req, res){
  res.send('<form action="/" method="POST">Name: <input type="text" name="name" value="Andrew"><br><input type="submit"></form>');
});

app.post("/", function(req, res){
  console.log("receive POST request:", req.body);
  res.send('<h1>Hello ' + req.body.name + "!</h1>");
});