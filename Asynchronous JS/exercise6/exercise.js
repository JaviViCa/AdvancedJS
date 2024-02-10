const isLogged = true;

function logging (isLogged) {
    return new Promise((resolve, reject) => {
        if (isLogged) {
            resolve(Math.random());
        } else {
            reject(new Error("Error: Not logged user"));
        }
    });
}
function userLogged (num) {
    return new Promise((resolve, reject) => {
      if (num > 0.5) {
        resolve({ name: "John", age: 24 });
      } else {
        reject(new Error(`Error: ${num} is lower or equals to 0.5`));
      }
    });
  }

logging(isLogged)
  .then((randomNum) => userLogged(randomNum))
  .then((user) => console.log(user))
  .catch((error) => (console.error(error)))
  .finally(() => console.log("End of the exercise!"))