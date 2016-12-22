var a = 0;
var b = 1;

// Computing a series of values without using a generator
function fib() {
    b = a + b;
    a = b - a;
    return b;
}
var i;
for (i = 0; i < 5; i++) {
    console.log(fib());
}

//Computing a series of values using a generator
function* fib2() {
    var a = 0;
    var b = 1;
    while (true) {
        yield a + b;
        b = a + b;
        a = b - a;
        // yield b+b;
    }
}
var i;
var result;
var iterator=fib2();
for(i=0;i<5;i++){
    result=iterator.next();
    console.log(result);
}
/*
* When a generator is called, the JS engine does not start running the code
* inside fib2 as it would with a normal function. Instead the call to fib2
* return an iterator. The iterator is used to pause and resume execution of
* the generator and pass values between the generator and the calling code.
*
* A generator may contain multiple yield statements but in this case it has
* one yield placed inside an infinite while loop
* */