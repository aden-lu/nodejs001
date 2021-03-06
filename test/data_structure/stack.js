function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;

    function push(element) {
        this.dataStore[this.top++] = element;
    }

    function pop() {
        return this.dataStore[--this.top];
    }

    function peek() {
        return this.dataStore[this.top - 1];
    }

    function clear() {
        this.top = 0;
    }

    function length() {
        return this.top;
    }

}
function print(str) {
    console.log(str);
}
var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
print("length: " + s.length());
print(s.peek());
var popped = s.pop();
print("The popped element is: " + popped);
print(s.peek());
s.push("Cynthia");
print(s.peek());
s.clear();
print("length: " + s.length());
print(s.peek());
s.push("Clayton");
print(s.peek());


function mulBase(num, base) {
    var s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);
    var converted = "";
    while (s.length() > 0) {
        converted += s.pop();
    }
    return converted;
}

var num = 32;
var base = 2;
var newNum = mulBase(num, base);
print(num + " converted to base " + base + " is " + newNum);
num = 125;
base = 8;
var newNum = mulBase(num, base);
print(num + " converted to base " + base + " is " + newNum);


function isPalindrome(word) {
    var s = new Stack();
    for (var i = 0; i < word.length; i++) {
        s.push(word[i]);
    }
    var rword = "";
    while (s.length() > 0) {
        rword += s.pop();
    }
    if (word == rword) {
        return true;
    }
    return false;
}

var word = "hello";
if (isPalindrome(word)) {
    print(word + " is a palindrome.");
}
else {
    print(word + " is not a palindrome.");
}
word = "racecar"
if (isPalindrome(word)) {
    print(word + " is a palindrome.");
}
else {
    print(word + " is not a palindrome.");
}


// Demonstrating Recursion,
// 5!=5*4*3*2*1
function fact(n) {
    var s = new Stack();
    while (n > 1) {
        s.push(n--);
    }

    var product = 1;
    while (s.length() > 0) {
        product *= s.pop();
    }
    return product;
}
print(fact(5));