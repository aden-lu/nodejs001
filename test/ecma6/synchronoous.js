

// Using a promise with code that looks synchronous
async(function*() {
    try {
        var img = yield loadImage('thesis.png');
        document.body.appendChild(img);
    } catch (err) {
        console.log('Error occurred while loading the image');
        console.log(err);
    }
});