function echo(text) {
    consoloe.log(text);
    throw Error('oops');
}

function showRandomNumber() {
    var p = Promise.resolve(Math.random());
    p.then(echo).catch(function (error) {
        console.log(error.stack);
    })
}

document.addEventListener('click', function handleClick() {
    showRandomNumber();
})

document.addEventListener('keypress', function handleKepress() {
    showRandomNumber();
})

/*
*
* */