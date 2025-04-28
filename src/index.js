import "./style.css";
import {loadHome} from "./home";

const body = document.querySelector("body");

const header = document.querySelector("header")
const footer = document.querySelector("footer")
const content = document.querySelector("#content");

function clearContent() {
    content.innerHTML = "";
}


loadHome(content);

