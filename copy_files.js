let fs = require('fs-extra');

fs.copy('source', 'target').then(function () {

    console.log('copyed source folder!');

}).catch (function (e) {

    console.log(e);

});
