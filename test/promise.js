Promise.all([function () {
    console.log(123);
}, function () {
    console.log(321);
}]);

var p = new Promise(function (resolve, reject) {
    var a = 1;
    if (a) {
        resolve("Work done!")
    } else {
        reject(Error('It broke!'))
    }
    return a;
});
p.then(function (result) {
    console.log(result);
});

var promise = new Promise(function (resolve, reject) {
    resolve(1);
});

promise.then(function (val) {
    console.log(val);
    return val + 3;
}).then(function (val) {
    console.log(val);
});

promise.then(() => 4).then(val=>console.log(val));