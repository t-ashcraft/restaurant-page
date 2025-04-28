import "./style.css";
import {loadHome} from "./home";
import {loadMenu} from "./menu";

const body = document.querySelector("body");

const header = document.querySelector("header");
const footer = document.querySelector("footer");
const content = document.querySelector("#content");

function clearContent() {
    content.innerHTML = "";
}

const homeButton = document.querySelector("#homeButton");
const menuButton = document.querySelector("#menuButton");
const contactButton = document.querySelector("#contactButton");

homeButton.addEventListener("click", function(e) {
    clearContent();
    loadHome(content);
}); 



menuButton.addEventListener("click", function(e) {
    clearContent();
    loadMenu(content);
}); 

loadHome(content);



