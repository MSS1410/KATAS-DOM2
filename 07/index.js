// Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const places = ['Gondor', 'Mordor', 'Rivendel', 'La Comarca', 'Nümenor']
const ul = document.createElement('ul')
const divS = document.querySelector('div[data-function="printHere"]')

places.forEach((place) => {
  const li = document.createElement('li')
  li.textContent = place
  ul.appendChild(li)
})

divS.appendChild.ul
