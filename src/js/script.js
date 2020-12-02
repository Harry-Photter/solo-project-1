'use strict';

const button = document.querySelector('.hamburger');
const sidenav = document.querySelector('.sidenav');
const overlay = document.querySelector('.overlay');


button.addEventListener('click',
  function () {
    sidenav.classList.toggle('show');
    button.classList.toggle('show');
    overlay.classList.toggle('show');
  });

overlay.addEventListener('click', function () {
  sidenav.classList.remove('show');
  overlay.classList.remove('show');
  button.classList.toggle('show');
});
