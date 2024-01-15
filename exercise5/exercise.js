const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;
/* Cuando asignas person1 a la variable person2, realmente estás copiando la referencia
en memoria de ese objeto. Por lo tanto, cuando modificas uno también modificas el otro,
debido a que realmente haces referencia al mismo objeto. Una manera de solucionar esto es:
const person2 = Object.assign({}, person1); */
// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName = "Simon";

console.log(person1);
console.log(person2);