const express = require('express');
function routes(Book) {

    const bookRouter = express.Router();
    bookRouter.route('/books')
    .post((req,res) => {
        console.log(req.body);
        const book = new Book(req.body);
        book.save();
        //console.log(book);
        res.json(book);

    })
    .get((req, res) => {
    //const response = {hello: 'This is my demo API.'};
    //const {query} = req;
    let query = {};
    if (req.query.genre) {
       query = req.query;
    }
    Book.find(query,(err,books) => {
        if (err) {
            return res.send(err);
        }

        res.json(books);
    });
    //res.json(response);
});

//middleware
bookRouter.use('/books/:bookId', (req, res, next) => {
    Book.findById(req.params.bookId,(err,book) => {
        if (err) {
            return res.send(err);
        }
        if (book) {
            req.book = book;
            next();
        } else {
            res.sendStatus(404);
        }
       // res.json(book);
    });
});

bookRouter.route('/books/:bookId')
    .get((req, res) => {
        res.json(req.book);
    })
.put((req,res) => {
    
        const { book } = req;
        book.title = req.body.title;
        book.genre = req.body.genre;
        book.author = req.body.author;
        book.read = req.body.read;
        book.save((err) => {
            if (err) {
               return res.send(err);
            }
            res.json(book);
        });
    
})
.patch((req,res) => {

    const { book } = req;
        // book.title = req.body.title;
        // book.genre = req.body.genre;
        // book.author = req.body.author;
        console.log(req.body);
        console.log(book);
        if (req.body._id) {
            delete req.body._id;
        }
        Object.entries(req.body).forEach((item) => {
            book[item[0]] = item[1];
        });
       // book.read = req.body.read;
        book.save((err) => {
            if (err) {
               return res.send(err);
            }
            res.json(book);
        });
        //res.json(book);
        
})
.delete((req,res) => {
    req.book.remove((err) => {
        if (err) {
            return res.send(err);
        }
        res.sendStatus(204);
    });

});

return bookRouter;

}

module.exports = routes;