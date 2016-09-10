//var googleTrends = require('google-trends-api');

function search(terms) {
    return terms.reduce(function(termMap, curr) {
        termMap[curr] = Math.floor(Math.random() * 1000);
    }, {});
}

module.exports = {
    search: search
};