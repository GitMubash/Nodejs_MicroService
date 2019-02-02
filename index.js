//imports
var express = require('express');
var bodyParser = require('body-parser');

app = express();
//Create express object

var port = process.env.PORT || 8000;
//Assign port
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//Allow Cors
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//Configuring express app behaviour

app.get("/getData", function (req, res) {
    res.send("GET Endpoint!");
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
  });
//GET Endpoint

app.post("/sendData", function (req, res) {
    let userName = req.body.Name;
    let mailId = req.body.MailId;

    res.send("You sent " + userName + "and " + mailId);
});

//POST Endpoint

console.log("Server Running at Port : " + port);

app.listen(port);