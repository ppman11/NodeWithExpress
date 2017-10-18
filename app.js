var express = require('express');

var app = express();

var port = process.env.port || 3000;

var nav = [{ Link: '/Books', Text: 'Book' }, { Link: '/Author', Text: 'Authors' }];

var bookRouter = require('./src/routes/bookRoutes')(nav);

var adminRouter = require('./src/routes/adminRoutes')(nav);

app.use(express.static('public'));

app.set('views', 'src/views');

app.set('view engine', 'ejs');

app.use('/Books', bookRouter);

app.use('/Admin', adminRouter);

app.get('/', function (req, res) {
    res.render('index', { title: 'Hello from render - Ejs', nav: [{ Link: '/Books', Text: 'Books' }, { Link: '/Authors', Text: 'Authors' }] });
});

app.get('/books', function (req, res) {
    res.send('Hello Books!');
});

app.listen(port, function (err) {
    console.log('Running Server on port ' + port);
});