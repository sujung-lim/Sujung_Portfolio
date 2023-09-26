'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const navbarBar = document.querySelector('.navbar-bar');
  const navbarMenu = document.querySelector('.navbar-menu');

  navbarBar.addEventListener('click', function () {
    //바 누르면 메뉴 토글 기능
    if (
      navbarMenu.style.display === 'none' ||
      navbarMenu.style.display === ''
    ) {
      navbarMenu.style.display = 'block';
    } else {
      navbarMenu.style.display = 'none';
    }
  });
});
