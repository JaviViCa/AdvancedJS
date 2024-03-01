/*
El objetivo de este ejercicio es convertir una cadena de texto en una nueva cadena 
donde cada carácter en la nueva cadena sea "(" si ese carácter aparece 
solo una vez en la cadena original, o ")" si ese carácter aparece más de una vez en 
la cadena original. Ignora la capitalización al determinar si un carácter es duplicado.

EJEMPLOS:
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/

function encodeWord(palabra) {
  //Codigo
}

console.log(encodeWord("din")); // => '((('
console.log(encodeWord("recede")); // => '()()()'
console.log(encodeWord("Success")); // => ')())())'
console.log(encodeWord("(( @")); // => '))(('
