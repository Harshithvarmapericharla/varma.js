function asyncFunction() {
    return new Promise((resolve, reject) => {
        let success = true; 
        setTimeout(() => {
            if (success) {
                resolve("Async operation was successful!");
            } else {
                reject("Async operation failed.");
            }
        }, 1000);
    });
}

async function main() {
    try {
        let message = await asyncFunction();
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}

main();
