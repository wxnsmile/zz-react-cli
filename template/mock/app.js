var express = require('express');
var app = express();
var db = require('./api/db.json');

// 设置跨域访问，方便开发
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// 具体接口设置
app.get('/api/getInfo', function(req, res) {
  res.send({ code: 200, data: db.getInfo });
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Mock server listening at http://%s:%s', host, port);
});
