var p1=new Promise(function (resolve, reject) {
    resolve('Success');
});

p1.then(function (value) {
    console.log(value);
    throw 'oh, no!';
}).catch(function (e) {
    console.log(e)
}).then(function () {
    console.log('after a catch the chain is restored!')
},function () {
    console.log('not fired due to the catch')
});

p1.then(function (val) {
    console.log(val);
    return Promise.reject('oh no!');
}).catch(function (e) {
    console.log(e)
}).then(function () {
    console.log('after a catch the chain is restored!')
},function () {
    console.log('not fired due to the catch')
});