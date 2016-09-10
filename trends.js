var googleTrends = require('google-trends-api');

function search(terms) {
    return terms.reduce(function(termMap, curr) {
        console.log(termMap);
        console.log(curr);
        termMap[curr] = Math.floor(Math.random() * 1000);
        return termMap;
    }, {});
}

module.exports = {
    search: search
};