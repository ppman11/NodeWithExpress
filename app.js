var express = require('express');

var app = express();

var port = process.env.port || 3000;

app.use(express.static('public'));

app.set('views', 'src/views');

app.get('/', function(req,res){
    res.send('Hello World!');
});

app.get('/books', function(req,res){
    res.send('Hello Books!');
});

app.listen(port, function(err){
    console.log('Running Server on port '+ port);
});