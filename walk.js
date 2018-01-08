let klaw = require('klaw'),
path = require('path');

klaw('source').on('data', function (item) {

    console.log('**********');
    console.log(item.path);
    console.log('dir: ' + item.stats.isDirectory());
    console.log('**********');

}).on('end', function () {

    console.log('done');

});
