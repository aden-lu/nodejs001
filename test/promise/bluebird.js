var Bluebird = require('bluebird');

var person = {
    name: 'Marie',
    introNodeStyle: function (callback) {
        var err = null;
        callback(err, 'My name is ' + this.name);
    }
};

var wrapper = Bluebird.promisify(person.introNodeStyle);
wrapper().then(function (greeting) {
    console.log('promisify without second argument: ' + greeting);
});

var wrapperWithPersonArg = Bluebird.promisify(person.introNodeStyle, person);
wrapperWithPersonArg().then(function (greeting) {
    console.log('promisify with a context argument: ' + greeting);
})

var wrapperWithBind = Bluebird.promisify(person.introNodeStyle.bind(person));
wrapperWithBind().then(function (greeting) {
    console.log('promisify using function.bind: ' + greeting);
})


// use filter to remove any even numbers,
// use reduce to add together the remaining values.

function sumOddNumbers(numbers) {
    return numbers.filter(function removeEvenNumbers(num) {
        return num % 2 == 1;
    }).reduce(function sum(runningTotal, num) {
        return runningTotal + num;
    }, 0);
}

// use sumOddNumbers as a synchronous function.
var firstSum=sumOddNumbers([1,2,3,4]);
console.log('first sum: '+firstSum);

// use sumOddNumbers as an async function
var promise=Bluebird.resolve([5,6,7,8]);
sumOddNumbers(promise).then(function(secondSum){
    console.log('second sum: '+secondSum);
})



function resolveLater(value) {
    return new Bluebird(function (resolve,reject) {
        setTimeout(function () {
            resolve(value);
        },1000);
    })
};
var numbers=Bluebird.resolve([1,resolveLater(2),3]);
console.log('Square the following numbers...');
numbers.map(function square(num) {
    console.log(num);
    return num*num;
}).then(function (result) {
    console.log('The squares of those numbers are...');
    console.log(result.join(','));
});

