'use strict'

init()
function init() {
  const elInput = document.querySelector('.question-input')
  const debouncedOnHandleQuestion = debounce(onHandleQuestion, 500)
  elInput.addEventListener('input', debouncedOnHandleQuestion)
}

function onHandleQuestion() {
  const elInput = document.querySelector('.question-input')
  const question = elInput.value.trim()

  if (question.length >= 4 && question.endsWith('?')) {
    getAns(renderAns)
    elInput.value = ''
  }
}

function renderAns(ans) {
  const answer = (document.querySelector('.res-ans').innerText = ans.answer)
  document.querySelector('.res-img').src = ans.image

  answer === 'yes' ? getJoke(renderJoke) : getDogImg(renderDogImg)
}

function renderJoke(joke) {
  document.querySelector('.joke').innerHTML = joke.value
  document.querySelector('.joke').style.display = 'block'
  document.querySelector('.dog-img').src = ''
}

function renderDogImg(dog) {
  document.querySelector('.dog-img').src = dog.message
  document.querySelector('.joke').style.display = 'none'
}
