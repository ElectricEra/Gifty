const express = require("express"),
  bodyParser = require("body-parser");
  app = express();
  MongoClient = require('mongodb').MongoClient;
  url = 'mongodb://gifty:hGmIUwM4X8FT39v4@gifty-shard-00-00-03zaj.mongodb.net:27017,gifty-shard-00-01-03zaj.mongodb.net:27017,gifty-shard-00-02-03zaj.mongodb.net:27017/gifty?ssl=true&replicaSet=gifty-shard-0&authSource=admin';
  ebay = require('ebay-api'),
  path = require('path'),
  fs = require('fs'),

  filter = require('./src/server.modules/filter.js'),
  searchEbay = require('./src/server.modules/ebay.js'),
  db = require('./src/server.modules/mongo.js');


// serve static assets normally
app.use(express.static(__dirname + '/src'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'src', 'index.html'))
})

app.post('/submit',function(req,res){

  var sort = filter.modCriteriaFormToObj(req.body),
    query = filter.modObjForQueryToDB(sort),
    errorCounter = 0,
    ideasNumber = 0;

  db.findIdeas({$or: query}).then((ideas) => {    
    var results = [];
    var sorted = filter.filterGeneratedIdeas(sort, ideas, 5);
    ideasNumber = sorted.length - 1;
    sorted.forEach((idea) => {
      results.push(searchEbay(idea, sort.price));
    });
    Promise.all(results).then((results) => {
      res.end(JSON.stringify(results))
    });
  }).catch(function(error){
      if(errorCounter === ideasNumber){
        res.end(JSON.stringify([
          {
            name: 'gift not found, please try again', 
            img: 'public/images/gifts/not-found.svg'
          }
        ]))
      } else {
        errorCounter++
      }
  });

});

app.post('/register',function(req,res){

  db.registerUser(req.body).then((user) => {
    res.end(JSON.stringify(user));
  }).catch(function(error){
      res.end(false);
  });

});

app.post('/login',function(req,res){

  db.loginUser(req.body).then((user) => {
    res.end(JSON.stringify(user));
  }).catch(function(error){
      res.end(false);
  });

});

app.post('/update',function(req,res){
  
  db.updateUser(req.body).then((user) => {
    res.end(JSON.stringify(user));
  }).catch(function(error){
      res.end(false);
  }); 

});

app.listen(3000,function(){
  console.log("Started on PORT 3000");
});
