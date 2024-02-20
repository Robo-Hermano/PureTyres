//for opening and closing navigation for smaller screens
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
/*calls the css function when the bars are clicked*/
menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
})
