let fs = require('fs');

// I can still use async fs methods like normal
fs.readFile('README.md', 'utf-8', function (e, data) {

    if (e) {

        console.log(e);

    }

    console.log(data);

});

// but now I can now use promises also!
fs.readFile('README.md','utf-8').then(function (data) {

    console.log(data);

}).catch (function (e) {

    console.log(e)

});
