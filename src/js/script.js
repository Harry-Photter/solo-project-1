'use strict';



document.querySelector('.hamburger').addEventListener('click', function(e) {
  e.preventDefault();
  console.log('click');
  toggleMenu();
});

function toggleMenu(visible) {
  document.querySelector('.menu').classList.toggle('show', visible);
}