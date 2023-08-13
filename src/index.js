import './global.css';
import createHome from './components/home';
import createMenu from './components/menu';
import createContact from './components/contact';
import createHeader from './components/header';

const contentDiv = document.querySelector("#content");
contentDiv.appendChild(createHeader());
contentDiv.appendChild(createHome());

const nav = document.querySelector(".nav");
nav.addEventListener("click", handleNavClick);
function handleNavClick(e) {
  const pageName = e.target.textContent;
  if (pageName === "HomeMenuContact") {
    return;
  }

  document.querySelector("main").remove();
  if (pageName.toLowerCase() === "home") {
    contentDiv.appendChild(createHome());
  } else if (pageName.toLowerCase() === "menu") {
    contentDiv.appendChild(createMenu());
  } else if (pageName.toLowerCase() === "contact") {
    contentDiv.appendChild(createContact());
  }
}