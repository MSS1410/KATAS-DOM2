// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const ul = document.createElement('ul')

countries.forEach((country) => {
  const li = document.createElement('li')
  li.textContent = country
  ul.appendChild(li)
})

document.body.appendChild(ul)

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const elementsDelete = document.querySelectorAll('.fn-remove-me')
// opcion a
elementsDelete.forEach((element) => element.remove())
// opcion b

if (elementsDelete) {
  elementsDelete.remove()
}

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const div = document.querySelector('div[data-function="printHere"]')
const ulCars = document.createElement('ul')

cars.forEach((car) => {
  const licars = document.createElement('li')
  ulCars.appendChild(licars)
})

div.appendChild(ulCars)

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
const countriesR = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]
countriesR.forEach((country) => {
  const divC = document.createElement('div')
  const h4 = document.createElement('h4')
  const img = document.createElement('img')

  h4.textContent = 'tittle'
  img.src = 'imgUrl'

  divC.appendChild(h4)
  divC.appendChild(img)
  document.body.appendChild(divC)
})

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la serie de divs.

const button = document.createElement('button')
button.textContent = 'eliminar el ultimo Div'

button.addEventListener('click', () => {
  const allDivs = document.querySelectorAll('body > div')
  if (allDivs.length > 0) {
    allDivs[allDivs.lenght - 1].remove()
  }
})

document.body.appendChild(button)
// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// divs que elimine ese mismo elemento del html.

const countriesRW = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]
countriesRW.forEach((country) => {
  const divC = document.createElement('div')
  const h4 = document.createElement('h4')
  const img = document.createElement('img')
  const buttonY = document.createElement('button')

  h4.textContent = 'tittle'
  img.src = 'imgUrl'
  button.textContent = 'Eliminar Div'

  button.addEventListener('click', () => {
    div.remove()
  })

  divC.appendChild(h4)
  divC.appendChild(img)
  divC.appendChild(button)
  document.body.appendChild(divC)
})
