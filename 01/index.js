// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const button = document.querySelector('.showme')
console.log(button)

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const h1 = document.querySelector('#pillado')
console.log(h1)

// 1.3 Usa querySelector para mostrar por consola todos los p

const p = document.querySelectorAll('p')
console.log(p)

// 1.4 Usa querySelector para mostrar por consola todos los elementos con
// la clase.pokemon

const pokemonElements = document.querySelectorAll('.pokemon')
console.log(pokemonElements)

// 1.5 Usa querySelector para mostrar por consola todos los elementos con
// el atributo data-function="testMe".

const elementsWithDataFunction = document.querySelectorAll(
  '[data-function="testMe"]'
)
console.log(elementsWithDataFunction)

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
// data-function="testMe".

const elementsWithDataFunctionSelect2 = document.querySelectorAll(
  '[data-function="testMe"]'
)
console.log(elementsWithDataFunctionSelect2[2]) // Rick
