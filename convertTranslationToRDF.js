var fs = require ('fs');
var input = fs.readFileSync('./data/translation-fa.json','utf8');
var output = '';
var currentObj = JSON.parse(input);
