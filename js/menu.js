let button = document.getElementById('menu-btn');

let navigation = document.getElementById('menu-list');

let wrp = document.getElementById('menu-wrapper');

button.addEventListener('click', function () {
    navigation.classList.toggle('header__menu-nav-showed');
    // wrp.classList.toggle('display-block');
});