'use strict'
let gSections = ['.address-book', '.yes-no', '.movies', '.pokemon']
let gCurrPage = '.address-book'

//INIT AND DISPLAY SECTION
//-------------------------------------------------
function onInit() {
  addNavEventListeners()
  onDisplaySection(gCurrPage)
}

function onDisplaySection(section) {
  gSections.forEach((sec) => {
    document.querySelector(sec).style.display =
      sec === section ? 'flex' : 'none'
  })
  if (section === '.address-book') onLoadContacts()
  if (section === '.pokemon') onGetPokemon()
  if (section === '.movies') {
    document.querySelector('.movies').style.display = 'block'
    onGetGenres()
  }
}

function addNavEventListeners() {
  const links = document.querySelectorAll('nav a')
  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault()
      const target = event.target.dataset.target
      onDisplaySection(target)
      gCurrPage = target
    })
  })
}
