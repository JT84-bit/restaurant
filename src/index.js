import {home} from './home.js'
import {menu} from './menu.js'
import {contact} from './about.js';
import "./style.css";

const homeB = document.querySelector(".home-button");
const menuB = document.querySelector(".menu-button");
const aboutB = document.querySelector(".about-button");
const head = document.querySelector(".head-contain");

const logo = document.createElement("div")
logo.classList.add("logo");
logo.innerHTML = "Smile and Sunshine<br>Cafe with Breakfast/Lunch "

head.appendChild(logo);


homeB.addEventListener("click", () => {
    resetContent();
    home();
})

menuB.addEventListener("click", () => {
    resetContent();
    menu();
})

aboutB.addEventListener("click", () => {
    resetContent();
    contact();
})

function resetContent() {
    const content = document.getElementById("content");
    let child = content.lastElementChild;
    while (child) {
        content.removeChild(child);
        child = content.lastElementChild;
    }
}

home();