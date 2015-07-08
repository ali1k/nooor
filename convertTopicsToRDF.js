var fs = require ('fs');
var _ = require("lodash");
for(var c = 1;c <= 716; c++){
    var input = fs.readFileSync('data/o' + c + '.json','utf8');
    var output = '';
    var currentObj = JSON.parse(input);
    var topic, subtopic, desc, sura, aya, rn;
    _.forEach(currentObj, function(node, i) {
        topic = node.topic;
        subtopic = node.subtopic;
        desc = node.desc;
        sura = node.sura;
        aya = node.aya;
        rn = c + '-' + i;
        output = output + '<http://tanzil.net/#' + sura + ':' + aya + '> <http://rdfs.org/sioc/ns#topic> <http://tanzil.ld-r.org/' + rn + '> . ';
        output = output + '<http://tanzil.ld-r.org/' + rn + '> a <http://tanzil.ld-r.org/vocab/Topic>; <http://www.w3.org/2000/01/rdf-schema#label> "' + subtopic + '"; <http://purl.org/dc/terms/description> """' + desc + '""". ';
        output = output + '<http://vajehyab.com/dehkhoda/' + encodeURIComponent(topic) + '> a <http://tanzil.ld-r.org/vocab/Topic> ; <http://www.w3.org/2000/01/rdf-schema#label> "' + topic + '"; <http://purl.org/dc/terms/hasPart> <http://tanzil.ld-r.org/' + rn + '> . ';
    });
    console.log(output);
}
