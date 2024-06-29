// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
// evento click que ejecute un console log con la información del evento del click

const buttontoclick = document.createElement('button')
buttontoclick.id = 'btnToClick'
document.body.appendChild(button)

buttontoclick.addEventListener('click', (event) => {
  console.log('Evento de click', event)
})

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const inputFocus = document.getElementsByClassName('.focus')

inputFocus.addEventListener('focus', (event2) => {
  console.log('Valor del input focus', event2.target.value)
})

// document.body.appendChild(inputFocus)

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const eventoInput = document.getElementsByClassName('.value')

eventoInput.addEventListener('input', (event3) => {
  console.log('valor del input input', event3.target.value)
})
