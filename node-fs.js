let fs = require('fs');

// I can still use async fs methods like normal
fs.readFile('README.md', 'utf-8', function (e, data) {

    console.log('using the built in node js module to read a file: ');

    if (e) {

        console.log(e);

    }

    console.log(data);

});

// If I want to use promises I have to do something like this:
let readFile = function (uri, encoding) {

    let fs = require('fs');

    encoding = encoding || 'binary';

    return new Promise(function (resolve, reject) {

        if (!uri) {

            reject(new Error('no uri given'));

        }

        fs.readFile(uri, encoding, function (e, data) {

            if (e) {

                reject(e);

            }

            resolve(data);

        });

    });

};

// Now I can use promises with js
readFile('README.md','utf-8').then(function (data) {

    console.log('using my readFile method that makes use of promises: ');

    console.log(data);

}).catch (function (e) {

    console.log(e)

});
