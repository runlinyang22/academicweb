var menu = document.querySelector('.menu');
var nav = document.querySelector('.primary-nav');
if (menu && nav) {
  menu.addEventListener('click', function () {
    nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', nav.classList.contains('open') ? 'true' : 'false');
  });
}
