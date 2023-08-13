import './style.css';
import { createEl } from "../../utils";

export default function createHeader() {
  const header = createEl("header", "header");
  const container = createEl("div", "container");
  const h1 = createEl("h1");
  const ul = createEl("ul", "nav");
  const li1 = createEl("li", "tab-home");
  const li2 = createEl("li", "tab-menu");
  const li3 = createEl("li", "tab-contact");
  h1.textContent = `Artie Bucco's 'Vesuvio'`;
  li1.textContent = "Home";
  li2.textContent = "Menu";
  li3.textContent = "Contact";
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  container.appendChild(h1);
  container.appendChild(ul);
  header.appendChild(container);

  return header;
}
/*
  <header>
    <h1>Something</h1> 
    <ul class="nav">
      <li class="tab-home">Home</li>
      <li class="tab-menu">Menu</li>
      <li class="tab-contact">Contact</li>
    </li>
  </header>

 */