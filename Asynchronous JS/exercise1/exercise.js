function printAsyncName(callback, name) {
    setTimeout(() => {
        callback();
        setTimeout(() => {
            console.log(name)
        }, 2000)
    }, 1000);
}

let callback = () => console.log("Hello");
printAsyncName(callback, "Javi")