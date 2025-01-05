const input = document.getElementById('inputbox')
const buttons = document.querySelectorAll('button')
let string = ''
const arr = Array.from(buttons)
console.log(arr)
arr.forEach(button => {
  console.log(button)
  button.addEventListener('click', (e) => {
    // console.log(e.target.innerHTML)

    if (e.target.innerHTML === '=') {
      string = eval(string) // eslint-disable-line
      input.value = string
    } else if (e.target.innerHTML === '%') {
      console.log(typeof parseFloat(string))
      const percentage = parseFloat(string) / 100
      console.log(percentage)
      input.value = percentage
      string = percentage
    } else if (e.target.innerHTML === 'AC') {
      string = ''
      input.value = string
    } else if (e.target.innerHTML === 'DEL') {
      string = string.substring(0, string.length - 1)
      input.value = string
    } else {
      string += e.target.innerHTML
      input.value = string
    }
  })
})
