'use strict'

function onLoadContacts() {
  getContacts(renderContacts)
}

function renderContacts(contacts) {
  const elContactList = document.querySelector('.contact-list')
  elContactList.innerHTML = ''
  
  contacts.forEach((contact) => {
    const card = document.createElement('div')
    card.classList.add('contact-card')
    card.innerHTML = `
        <img class="cntct-img" src="https://robohash.org/${contact.fname}?set=set5" alt="">
        <h2>First name: ${contact.fname}</h2>
        <h2>Last name: ${contact.lname}</h2>
      `
    elContactList.appendChild(card)
  })
}
