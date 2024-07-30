let promise = new Promise((resolve, reject) => {
    let success = true; // Change this to false to see the reject scenario
    setTimeout(() => {
        if (success) {
            resolve("Operation was successful!");
        } else {
            reject("Operation failed.");
        }
    }, 1000);
});

promise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});
