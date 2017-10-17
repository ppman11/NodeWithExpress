var express = require('express');

var app = express();

var port = process.env.port || 3000;

var bookRouter = express.Router();

app.use(express.static('public'));

app.set('views', 'src/views');

app.set('view engine', 'ejs');

var books = [
    {
      "id" : "978-0641723445",
      "cat" : ["book","hardcover"],
      "name" : "The Lightning Thief",
      "author" : "Rick Riordan",
      "series_t" : "Percy Jackson and the Olympians",
      "sequence_i" : 1,
      "genre_s" : "fantasy",
      "inStock" : true,
      "price" : 12.50,
      "pages_i" : 384
    }
  ,
    {
      "id" : "978-1423103349",
      "cat" : ["book","paperback"],
      "name" : "The Sea of Monsters",
      "author" : "Rick Riordan",
      "series_t" : "Percy Jackson and the Olympians",
      "sequence_i" : 2,
      "genre_s" : "fantasy",
      "inStock" : true,
      "price" : 6.49,
      "pages_i" : 304
    }
  ,
    {
      "id" : "978-1857995879",
      "cat" : ["book","paperback"],
      "name" : "Sophie's World : The Greek Philosophers",
      "author" : "Jostein Gaarder",
      "sequence_i" : 1,
      "genre_s" : "fantasy",
      "inStock" : true,
      "price" : 3.07,
      "pages_i" : 64
    }
  ,
    {
      "id" : "978-1933988177",
      "cat" : ["book","paperback"],
      "name" : "Lucene in Action, Second Edition",
      "author" : "Michael McCandless",
      "sequence_i" : 1,
      "genre_s" : "IT",
      "inStock" : true,
      "price" : 30.50,
      "pages_i" : 475
    }
  ]
bookRouter.route('/')
          .get(function(req,res){
            res.render('books',{ title: 'Hello from render - Ejs', nav: [{ Link: '/Books', Text: 'Books' }, { Link: '/Authors', Text: 'Authors' }] , books: books
            });
          });

bookRouter.route('/Single')
          .get(function(req,res){
            res.send('Hello Single Book!');
          });


app.use('/Books', bookRouter);

app.get('/', function (req, res) {
    res.render('index', { title: 'Hello from render - Ejs', nav: [{ Link: '/Books', Text: 'Books' }, { Link: '/Authors', Text: 'Authors' }] });
});

app.get('/books', function (req, res) {
    res.send('Hello Books!');
});

app.listen(port, function (err) {
    console.log('Running Server on port ' + port);
});