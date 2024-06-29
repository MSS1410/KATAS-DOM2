// 1.1 Inserta dinamicamente en un html un div vacio con javascript.
const div = document.createElement('div')
document.body.appendChild(div)

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const divP = document.createElement('div')
const p = document.createElement('p')

divP.appendChild(p)
document.body.appendChild(divP)

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
// 	loop con javascript.

const divSixP = document.createElement('div')
for (i = 0; i < 6; i++) {
  const sixP = document.createElement('p')
  divSixP.appendChild(sixP)
}
document.body.appendChild(divSixP)

// 1.4 Inserta dinamicamente con javascript en un html una p con el
// 	texto 'Soy dinámico!'.

const pTexto = document.createElement('p')
pTexto.textContent = 'Soy Dinamico'
document.body.appendChild(pTexto)

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2 = document.querySelector('.fn-insert-here')
h2.textContent = 'Wubba Lubba dub dub'

// 1.6 Basandote en el siguiente array crea una lista ul > li con
// los textos del array.
// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ul = document.createElement('ul')

apps.forEach((app) => {
  const li = document.createElement('li')
  li.textContent = app
  ul.appendChild(li)
})

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const NodosEliminar = document.querySelector('.fn-remove-me')

NodosEliminar.forEach((nodo) => nodo.remove())
// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

const divs = document.querySelector('div')
if (divs.length >= 2) {
  const pMedio = document.createElement('p')
  pMedio.textContent = 'Voy en medio like jueves'
  divs[0].insertAdjacentElement('afterend', pMedio)
}

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
// 	.fn-insert-here

const divsFN = document.querySelector('.fn-insert-here')

divsFN.forEach((div) => {
  const pTexto2 = document.createElement('p')
  pTexto2.textContent = 'Voy Dentro suuuu'
  div.appendChild(pTexto2)
})
