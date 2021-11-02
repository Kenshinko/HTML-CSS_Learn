let btn = document.getElementById("menu-btn");
let btnclose = document.getElementById("menu-closetab");
let navigation = document.getElementById("menu-list");
let wrp = document.getElementById("cover-block");


btn.addEventListener("click", function () {
    navigation.classList.toggle("header__menu-nav-showed");
    wrp.classList.toggle("menu-nav-cover-showed");
});

btnclose.addEventListener("click", function () {
    navigation.classList.toggle("header__menu-nav-showed");
    wrp.classList.toggle("menu-nav-cover-showed");
});