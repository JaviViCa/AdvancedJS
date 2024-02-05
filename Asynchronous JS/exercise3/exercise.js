function repeatHello(callback) {
    let interval = setInterval(callback, 1000);
    setTimeout(() => clearInterval(interval),5000);
}

let callback = () => console.log("Hello");
// Al usar una función de flecha para el callback, nos aseguramos de que se evitan problemas de perdidas de contexto y que el código sea conciso y fácil de entender.

repeatHello(callback)
