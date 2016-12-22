var array = [1, 2];
var iterator = array[Symbol.iterator]();

console.log(iterator.next()); // {value:1,done:false}
console.log(iterator.next()); // {value:2,done:false}
console.log(iterator.next()); // {value:undefined,done:true}


// The iterator.next() method accepts a parameter that is used as a result
// of the yield expression inside the generator.
function* counter() {
    var count = 0;
    var increment = 1;
    while (true) {
        count = count + increment;
        increment = (yield count) || increment;
    }
}
var interator1 = counter();
console.log(interator1.next().value);
console.log(interator1.next().value);
console.log(interator1.next().value);
console.log(interator1.next(10).value);
console.log(interator1.next().value);
console.log(interator1.next().value);