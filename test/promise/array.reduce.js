// Build a sequential chain of promises from the elements in an array.
// An array of products is passed in along with a callback that is invoked once
// for each product in the array. If  the callback returns a promise, the next
// callback is not invoked until that promise is fulfilled.
// It iterates over the array by calling reduce and seeding the previous value
// with a resolved promise.
function sequence(array, callback) {
    return array.reduce(function chain(promise, item) {
        return promise.then(function () {
            return callback(item);
        })
    }, Promise.resolve());
};

// The chain function given to reduce always returns a promise that the return value
// of the callback passed into sequence resolves.
function sequence_v2(array, callback) {
    function chain(array, index) {
        if (index == array.length) return Promise.resolve();
        return Promise.resolve(callback(array[index])).then(function () {
            return chain(array, index + 1);
        });
    }

    return chain(array, 0);
}

var products = ['sku-1', 'sku-2', 'sku-3'];
sequence_v2(products, function (sku) {
    return getInfo(sku).then(function (info) {
        console.log('info ' + info);
    })
}).catch(function (reason) {
    console.log('reason ' + reason);
});

function getInfo(sku) {
    console.log('Request info for ' + sku);
    return Promise.resolve('request ' + sku + ' done!');
}


// Conditionally expanding a chain based on the outcome of a preceding promise
// The pump function appends each chunk of data to an array and recursively calls
// itself until result.done signals there is no more data available.

function readAllChunks(readableStream) {
    var reader = readableStream.getReader();
    var chunks = [];

    return pump();
    function pump() {
        return reader.read().then(function (result) {
            if (result.done) {
                return chunks;
            }
            chunks.push(result.value);
            return pump();
        })
    }
}