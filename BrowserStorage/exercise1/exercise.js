const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveLocalStorage(user) {
  let userJson = JSON.stringify(user);
  localStorage.setItem("user", userJson);
}

saveToLocalStorage(user);