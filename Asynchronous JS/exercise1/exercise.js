function printAsyncName(callback, name) {
    setTimeout(() => {
        callback();
    }, 1000);
    setTimeout(() => {
        console.log(name)
    }, 2000)
}

let callback = () => console.log("Hello");
printAsyncName(callback, "Javi")