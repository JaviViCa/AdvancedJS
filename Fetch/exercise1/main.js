async function getTodos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    return data;
}
getTodos()
    .then((todos) => console.log(todos))
    .catch((error) => console.error(error))