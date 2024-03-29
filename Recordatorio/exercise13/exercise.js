function calculateAverageAge(persons) {
  let sum = 0;
  /* persons.reduce((a, b, i) => {
    if(i === 1){
      sum = a.age + b.age
    } else {
      sum = sum + b.age
    }
  }) */
  sum = persons.map((p) => p.age).reduce((a,b) => a + b)
  return Math.round(sum/persons.length)
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const average = calculateAverageAge(persons);
console.log(persons);
console.log(average);