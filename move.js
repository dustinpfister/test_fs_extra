let fs = require('fs-extra'),

source = process.argv[2],
target = process.argv[3];

let check = function () {

    return new Promise(function (resolve, reject) {

        if (source && target) {

            resolve();

        }

        reject(new Error('must give a source and target in that order:'));

    });

};

check().then(function () {

    return fs.move(source, target);

}).then(function () {

    console.log('moved source to target:');

}).catch (function (e) {

    console.log(e.message);

});
