Promise.resolve('foo').then(function (string) {
    // 1. Recevie 'foo' concatinate "bar" to it and resolve that to the next then
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            string += "bar";
            resolve(string);
        }, 1);
    });
})
// 2. receive 'foobar', register a callback functino to work on that string
// and print it to the console, but not before return the unworked on
// string to the next then
    .then(function (string) {
        setTimeout(function () {
            string += 'baz';
            console.log(string);
        });
        return string;
    })
    // 3. Print helpful message about how the code in this section will be run
    // before string is actually processed by the mocked asynchronous code in the
    // prior then block.
    .then(function (string) {
        console.log("Last then: oops... didn't bother to instantiate and return" +
            'a promise in the prior then so the sequence may a little bit' +
            'surprising.');
        // Note that `string` will not have the 'baz' bot of it at this point. This
        // is because we mocked that to happen asynchronously with a setTimeout function
        console.log(string);
    });


Promise.resolve('ta-da').then(
    function step2(result) {
        console.log('Step 2 received ' + result);
        return 'Greetings from Step 2';
    }
).then(function step3(result) {
    console.log('Step 3 received ' + result);
}).then(function step4(result) {
    console.log('Step 4 received ' + result);
    return Promise.resolve('fulfilled value')
}).then(function step5(result) {
    console.log('Step 5 received ' + result);
});