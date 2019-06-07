var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.set('view engine', 'ejs')
app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
})
app.get('/403', function(req, res, next) {
    // trigger a 403 error
    var err = new Error('not allowed!');
    err.status = 403;
    next(err);
});
app.get('/', (req, res) => res.render('pages/index'))
app.get('/500', function(req, res, next) {
    // trigger a generic (500) error
    next(new Error('keyboard cat!'));
});

// Error handlers
// $ curl http://localhost:3000/notfound
// $ curl http://localhost:3000/notfound -H "Accept: application/json"
// $ curl http://localhost:3000/notfound -H "Accept: text/plain"

app.use(function(req, res, next) {
    res.status(404);

    res.format({
        html: function() {
            res.render('404', { url: req.url })
        },
        json: function() {
            res.json({ error: 'Not found' })
        },
        default: function() {
            res.type('txt').send('Not found')
        }
    })
});

// error-handling middleware, take the same form
// as regular middleware, however they require an
// arity of 4, aka the signature (err, req, res, next).
// when connect has an error, it will invoke ONLY error-handling
// middleware.

// If we were to next() here any remaining non-error-handling
// middleware would then be executed, or if we next(err) to
// continue passing the error, only error-handling middleware
// would remain being executed, however here
// we simply respond with an error page.
/* 
What is fucking confusing is the fact that pratyush doesnt even convert scss pages into css primarily using vue's render engine
to render this out which presents a problem because i only use ejs and express and hate using mark down due to arbitrary buffer 
overflow issue thereby introducing a spectre attack vulnerability into a system which inherently never contacted the processor 
itself instead uses c++ as a middleware to do so. Now in the latest revisions on node.js machine level code converted into higher
levels in the instance js and ts, however i either convert all of these files into regular css or somehow connect a middleware 
and trick express servers to so 
You think it's like but it's never like this
Never get or res.render a .scss page because it doesn't conform to the ejs standards
WTF PRATYUSH
JUST WTF
*/
app.use(function(err, req, res, next) {
    // we may use properties of the error object
    // here and next(err) appropriately, or if
    // we possibly recovered from the error, simply next().
    res.status(err.status || 500);
    res.render('500', { error: err });
});


if (!module.parent) {
    app.listen(3000);
    console.log('Express started on port 3000');
}