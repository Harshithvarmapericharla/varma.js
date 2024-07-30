function doSomething(callback) {
    console.log("Doing something...");
    setTimeout(() => {
        console.log("Something done!");
        callback();
    }, 1000);
}

function myCallback() {
    console.log("This is the callback function.");
}

doSomething(myCallback);
