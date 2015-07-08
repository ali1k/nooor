var libxmljs = require("libxmljs");
var fs = require ('fs');
var _ = require("lodash");
var xml = fs.readFileSync('data/quran-uthmani.xml','utf8');
var xmlDoc = libxmljs.parseXml(xml, { noblanks: true });
// start parsing
var output = '';
var suras = xmlDoc.root().childNodes();
for(var i = 0; i < suras.length; i++) {
    var sura = suras[i];
    var suraIndex = sura.attr('index').value();
    var suraName = sura.attr('name').value();
    var ayas = sura.childNodes();
    for(var j = 0; j < ayas.length; j++) {
        var aya = ayas[j];
        var ayaIndex = aya.attr('index').value();
        var ayaText = aya.attr('text').value();
        output = output + '<http://tanzil.net/#' + suraIndex + ':' + ayaIndex + '> <http://rdfs.org/sioc/ns#content> """' + ayaText + '"""@ar . ';
    }
}
console.log(output);
