import './global.css';
import createHome from './components/home';
import createMenu from './components/menu';

const contentDiv = document.querySelector("#content");
// contentDiv.appendChild(createHome());
contentDiv.appendChild(createMenu());