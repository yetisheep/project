var mongo_client = require("mongodb").MongoClient;
var content;
mongo_client.connect('mongodb://127.0.0.1:27017/taipei', function(err,db) {

				if (err) throw err;

				db.collection('edu').find({o_tlc_agency_name: '國家圖書館'}, function(err, doc) {
						if (err) throw err;
						content = doc;
						// print the result
						console.dir(doc);
						// close the DB
						db.close();
						});
				// declare success
				console.dir("Called findOne!");
				});
var express = require('express'),
    app = express();

app.get('/', function(req, res){
    res.send(content);
});

app.get('*', function(req, res){
    res.send(content);
});

app.listen(8080);
console.log('Express server started on port 8080');