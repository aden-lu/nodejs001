function getData() {
    var timeAllowed = 500;//milliseconds
    var deadline = Date.now() + timeAllowed;

    var freshData = ""; //ajax(someUrl);
    var cachedData = fetchFromCache().then(function (data) {
        return new Promise(function (resolve) {
            var timeRemaining = Math.max(deadline - Data.now(), 0);
            setTimeout(function () {
                resolve(data);
            }, timeRemaining);
        })
    });

    var failure = new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject(new Error('Unable to fetch data in allotted time'))
        }, timeAllowed);
    })
}