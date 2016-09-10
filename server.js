var express = require('express'),
    app     = express(),
    path    = require('path'),
    trends  = require('./trends');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules'))); // TODO: load in node modules via build process

app.get('/search', function(req, res) {
    console.log(req.params.terms);
    trends.search(req.params.terms)
        .then(function(results) {
            res.send(results);
        });
});

app.listen(8080, function() {
    console.log('Listening on port 8080');
});