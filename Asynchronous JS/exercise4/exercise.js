let promise = new Promise((resolve, reject) => {
    const number = -5;
    if (number >= 10) {
        resolve(number)
    } else {
        reject(number)
    }
})

promise
    .then((value) => console.log(`${value} is greater or equals than 10`))
    .catch((error) => (console.error(`Error: ${error} is lower than 10`)))