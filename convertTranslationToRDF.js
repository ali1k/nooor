var fs = require ('fs');
var _ = require("lodash");
var input = fs.readFileSync('./data/translation-fa.json','utf8');
var output = '';
var currentObj = JSON.parse(input);
_.forEach(currentObj, function(node, i) {
    output = output + '<http://tanzil.net/#' + node.sura + ':' + node.aya + '> <http://purl.org/linguistics/gold/translation> """' +  node.text + '""" . ';
});
console.log(output);
