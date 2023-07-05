let btn = document.querySelector(".menu-btn");
let burger = document.querySelector(".menu-btn-burger");
//console.log("b", btn);
let nav = document.querySelector(".nav");
let menuNav = document.querySelector(".menu-nav");
let menuNavItems = document.querySelectorAll(".menu-nav-item");
//console.log(menuNavItems);

let isOpen = false;

btn.addEventListener("click", handledOpen);

function handledOpen() {
  if (!isOpen) {
    burger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    menuNavItems.forEach((item) => item.classList.add("open"));
    isOpen = true;
  } else {
    burger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    menuNavItems.forEach((item) => item.classList.remove("open"));

    isOpen = false;
  }
}
