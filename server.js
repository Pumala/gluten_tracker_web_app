var express = require('express');
var app = express();
var pgp = require('pg-promise')();
var bodyParser = require('body-parser');
var cors = require('cors');
var apiRequest = require('cached-request')(require('request'));
require('dotenv').config();
apiRequest.setCacheDirectory('request-cache');


app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

var cn = {
  host: process.env.DB_HOST,
  port: 5432,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  ssl: true
};

var db = pgp(cn);


app.post('/checkingredients', function(request, response) {
  var data = request.body;
  db.any("SELECT * FROM gluten WHERE ingredient IN ($1^)", pgp.as.csv(data))
    .then(function (data) {
        response.send(data);
    })
    .catch(function (error) {
        response.json(error);
    });
});

app.get('/checkbarcode/:barcode', function(request, response) {
  apiRequest({
    url: 'https://api.nutritionix.com/v1_1/item?upc=' +
    request.params.barcode + '&appId=0e465663&appKey=37247992aaa80396d9f382ec6142ed2c',
    ttl: 99999999999999999999999999
  }, function(err, apiResponse, body) {
    // console.log(body.toString());
    response.send(body);
  });
});

app.get('/products', function(request, response) {
  db.any("select * from products order by name")
    .then(function (data) {
        response.send(data);
    })
    .catch(function (error) {
        response.json(error);
    });
});

app.post('/addProduct', function(request, response) {
  var product = request.body.product.toLowerCase();
  console.log(product);
  db.none("insert into products(name) values($1)", [product])
    .then(function () {
        response.send(data);
    })
    .catch(function (error) {
        response.send(error);
    });
});

app.listen(8000, function(){
  console.log("Listening on port 8000");
});
