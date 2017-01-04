function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;

    function enqueue(element) {
        this.dataStore.push(element);
    }

    function dequeue() {
        return this.dataStore.shift();
    }

    function front() {
        return this.dataStore[0];
    }

    function back() {
        return this.dataStore[this.dataStore.length - 1];
    }

    function toString() {
        var retStr = "";
        for (var i = 0; i < this.dataStore.length; i++) {
            retStr += this.dataStore[i] + "\n";
        }
        return retStr;
    }

    function empty() {
        if (this.dataStore.length == 0) {
            return true;
        } else {
            return false;
        }
    }
}
function print(str) {
    console.log(str);
}

var q = new Queue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
print(q.toString());
q.dequeue();
print(q.toString());
print("Front of queue: " + q.front());
print("Back of queue: " + q.back());


//　Radix sort algorithm
function distribute(nums, queues, n, digit) {
    // digit represents either the 1s or 10s place
    for (var i = 0; i < n; i++) {
        if (digit == 1) {
            queues[nums[i] % 10].enqueue(nums[i]);
        } else {
            queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
        }
    }
}
function collect(queues, nums) {
    var i = 0;
    for (var digit = 0; digit < 10; ++digit) {
        while (!queues[digit].empty()) {
            nums[i++] = queues[digit].dequeue();
        }
    }
}
function dispArray(arr) {
    var res = "";
    for (var i = 0; i < arr.length; i++) {
        res += arr[i] + " ";
    }
    console.log(res);
}


var queues = [];
for (var i = 0; i < 10; i++) {
    queues[i] = new Queue();
}
var nums = [];
for (var i = 0; i < 10; i++) {
    nums[i] = Math.floor(Math.floor(Math.random() * 101));
}

print("Before radix sort:");
dispArray(nums);
distribute(nums,queues,10,1);
collect(queues,nums);
distribute(nums,queues,10,10);
collect(queues,nums);
print("\nAfter radix sort:");
dispArray(nums);