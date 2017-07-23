const hostname = process.env.IP;
const port = process.env.PORT;
var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var Promise = require('promise');
var content0 , count123;
app.set('view engine', 'jade');
// var bodyParser = require('body-parser');
// app.use(express.bodyParser());
//app.use(express.static('public'));
app.use(express.static('node_modules/bootstrap/dist'));
// var finish = false;
// const http = require('http');

// app.get('/:number', function(req, res){
//     res.send('number: ' + req.params.number);
// }); 


// console.log(app.get('title'));
// app.set('views', './views');

// app.use(bodyParser.urlencoded({ extended: true })); 

//app.use(express.bodyParser());
app.get('/', function (req, res) {
    res.render("index");

});

app.get('/test', function(req, res) {
    search(req.query.name);
    res.render('test',{content: content0 , count: count123});
});
// app.get('/find', function(req, res) {
//   res.render('test.jade');
//   search(req.query.name);
//   res.send(content);
// });
    
  
   
// app.get('/map', function(req, res) {
//   res.sendfile('public/map.html');
// });

app.get('/search', function(req, res){
      
  search(req.query.name);
  res.render('search',{content: content0 , count: count123});
});


app.get('/searchname', function(req, res){
 
  searchname(req.query.name);
  
  res.render('search',{content: content0 , count: count123});
});
   

//     var db = req.db;
//   var collection = db.get('edu');
//   collection.find({o_tlc_agency_name : s}, function(e, docs){
//       res.render('result', {"result" : docs});
//   });


// app.get('/test', function(req, res) {
//   console.log(req.query.name);
//   console.log(req.query.tel);
//   res.send(content);
   
// });
 
// app.get('/rouyh7.,m oms', function(req, res) {
//   res.sendfile('public/rooms.html');
// });




function searchname(searchword){
     
     var query = { o_tlc_agency_name: new RegExp(searchword)};
     MongoClient.connect('mongodb://localhost:27017/taipei', function(err, db) {
  if (err) {
    throw err;
  }
  db.collection('edu').find(query ,{ o_tlc_agency_name:1, o_tlc_agency_address:1, o_tlc_agency_opentime:1, _id :0 }).toArray(function(err, result) {
    if (err) {
      throw err;
    }
    db.collection('edu').count(query ,{ o_tlc_agency_name:1, o_tlc_agency_address:1, o_tlc_agency_opentime:1, _id :0 },function(err,count){
        if (err) throw err;
        count123 = count;
    // console.log(searchword);
    // console.log(count123);
    content0 = result;
    //finish = true;
    // console.log(content0);
    db.close();
  });
  });
});

}
function search(searchword){
     
     var query = { o_tlc_agency_address: new RegExp(searchword)};
     MongoClient.connect('mongodb://localhost:27017/taipei', function(err, db) {
  if (err) {
    throw err;
  }
  db.collection('edu').find(query ,{ o_tlc_agency_name:1, o_tlc_agency_address:1, o_tlc_agency_opentime:1, _id :0 , google:1}).toArray(function(err, result) {
    if (err) {
      throw err;
    }
    db.collection('edu').count(query ,{ o_tlc_agency_name:1, o_tlc_agency_address:1, o_tlc_agency_opentime:1, _id :1 ,  google:1 },function(err,count){
        if (err) throw err;
        count123 = count;
    // console.log(searchword);
    // console.log(count123);
    content0 = result;
    //finish = true;
    // console.log(content0);
    db.close();
  });
  });
});

}
app.listen(port, hostname);
//module.exports = app;