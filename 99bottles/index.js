let beers = ''
let verse1 = ' bottles of beer on the wall, '
let verse2 = ' bottles of beer. Take one down and pass it around, '
let verse3 = ' bottles of beer on the wall.'

let verse1_2 = ' bottle of beer on the wall, '
let verse2_2 =
  ' bottle of beer. Take one down and pass it around, no bottles of beer on the wall.'

const list = document.querySelector('#song')
const br = document.createElement('br')
function bottles() {
  for (i = 99; i > 0; i--) {
    beers = i
    let verse = document.createElement('p')
    if (beers > 1) {
      verse.textContent = beers + verse1 + beers + verse2 + (beers - 1) + verse3
      list.appendChild(verse)
    } else if (beers === 1) {
      verse.textContent = beers + verse1_2 + beers + verse2_2
      list.appendChild(verse)
    }
  }
  return list
}

bottles()
