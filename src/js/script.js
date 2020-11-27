'use strict';

const button = document.querySelector('.hamburger');
const sidenav = document.querySelector('.sidenav');

button.addEventListener('click',
  function () {
    sidenav.classList.toggle('show');
    button.classList.toggle('show');
  });
