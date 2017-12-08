const response = [
  'It is certain',
  'It is decidedly so',
  'Without a doubt',
  'Yes definitely',
  'You may rely on it',
  'As I see it, yes',
  'Most likely',
  'Outlook good',
  'Yes',
  'Signs point to yes',
  'Reply hazy try again',
  'Ask again later',
  'Better not tell you now',
  'Cannot predict now',
  'Concentrate and ask again',
  "Don't count on it",
  'My reply is no',
  'My sources say no',
  'Outlook not so good',
  'Very doubtful'
]

const $container = document.querySelector('.container')
const $input = document.createElement('input')
const $button = document.createElement('button')
const $result = document.createElement('div')
$result.setAttribute('class', 'result')
$container.appendChild($input)
$container.appendChild($button)
$container.appendChild($result)
const thinking = 'Thinking...'

function eightBall() {
  $result.textContent = ''
  const answer = response[Math.floor(Math.random() * response.length)]
  $result.textContent = answer
}

function delay() {
  $result.textContent += thinking[i]
}

function loading(thinking) {
  for (i = 0; i < thinking.length; i++) {
    setTimeout(delay, 333)
  }
  eightBall()
}

// function loadAnswer() {
//   $result.innerHTML = ''
//   for (i = 0; i < thinking.length; i++) {
//     setTimeout(loading(thinking), 1000)
//   }
//   eightBall(response)
// }

$button.addEventListener('click', loading)
