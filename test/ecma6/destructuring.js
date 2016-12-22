
var numbers=[10,20];
var [n1,n2]=numbers; // destructuring

var position={x:50,y:100};
var {x,y}=position;

console.log(x);
console.log(y);

reader.read().then(function (result) {
    // Use result.value and result.done
})
reader.read().then(function(value,done){
    // Use done and value directly with destructuring.
})