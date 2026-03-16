import "./style.css";
import {createHomePage} from "./modules/createHomePage.js";
import {createMenuPage} from "./modules/createMenuPage.js";
import {createContactPage} from "./modules/createContactPage.js";
createHomePage();
const nav = document.querySelector("nav");

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const contactBtn = document.getElementById("contact-btn");

const contentDiv = document.getElementById("content");

function clearPage(){
    contentDiv.innerHTML = "";
}

nav.addEventListener("click", (e) => {
    if(e.target == homeBtn){
        clearPage();
        createHomePage();
    } else if(e.target == menuBtn){
        clearPage();
        createMenuPage();
    } else if(e.target == contactBtn){
        clearPage();
        createContactPage();
    }
})