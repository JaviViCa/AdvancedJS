const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveToLocalStorage(user) {
  let userJson = JSON.stringify(user);
  localStorage.setItem("user", userJson);
}
function getFromLocalStorage() {
  let userJson = localStorage.getItem("user")
  if (userJson) {
    let user = JSON.parse(userJson);
    console.log(user);
  } else {
    console.error("No user stored in localStorage");
  }
}

saveToLocalStorage(user);
getFromLocalStorage();