import './global.css';
import createHome from './components/home';
import createMenu from './components/menu';
import createContact from './components/contact';
import createHeader from './components/header';

const contentDiv = document.querySelector("#content");
contentDiv.appendChild(createHeader());
contentDiv.appendChild(createContact());
changeTabLook(document.querySelector(".tab-home"));

const nav = document.querySelector(".nav");
nav.addEventListener("click", handleNavClick);
function handleNavClick(e) {
  const tab = e.target;
  if (tab.textContent === "HomeMenuContact") {
    return;
  }

  // update tab appearance
  changeTabLook(tab);

  document.querySelector("main").remove();
  if (tab.textContent.toLowerCase() === "home") {
    contentDiv.appendChild(createHome());
  } else if (tab.textContent.toLowerCase() === "menu") {
    contentDiv.appendChild(createMenu());
  } else if (tab.textContent.toLowerCase() === "contact") {
    contentDiv.appendChild(createContact());
  }
}

function changeTabLook(tab) {
  const tabs = document.querySelectorAll(".nav li");
  tabs.forEach(el => {
    el.classList.remove("active-tab");
  });
  tab.classList.add("active-tab");
}