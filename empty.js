let fs = require('fs-extra');

fs.emptyDir('target').then(function () {

    console.log('target should be there, and empty');

    // lets check
    return fs.readdir('target');

}).then(function (files) {

    console.log('the files in target:');
    console.log(files);

}).catch (function (e) {

    console.log(e);

});
