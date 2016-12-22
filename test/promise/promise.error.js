var Bluebird=require('bluebird');


// Functions that return promises should not throw errors.
function goodFunc(url) {
    return new Promise(function (resolve, reject) {
        var image;
        image.src = url; // Error: image is undefined

        image.onload = resolve;
        image.onload = reject;
    })
}


Bluebird.reject('No one listens tu turtle');