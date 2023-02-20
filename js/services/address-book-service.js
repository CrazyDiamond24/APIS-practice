'use strict'

function getContacts(cb) {
  const xhr = new XMLHttpRequest()
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const contacts = JSON.parse(xhr.responseText)
      cb(contacts)
    }
  }
  xhr.open(
    'GET',
    'https://filltext.com/?rows=20&fname={firstName}&lname={lastName}'
  )
  xhr.send()
}
