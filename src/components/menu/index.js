import './style.css'
import { createEl } from "../../utils";
import pizza from './pizza.jpg';
import kebab from './kebab.jpg';
import hotdog from './hotdog.jpg';

function createCard(name, description, imgURL) {
  const card = createEl("div", "card");
  const p1 = createEl("p");
  p1.textContent = name;
  const p2 = createEl("p");
  p2.textContent = description;
  const img = createEl("img");
  img.src = imgURL;

  card.appendChild(p1);
  card.appendChild(p2);
  card.appendChild(img);

  return card;
}

export default function createMenu() {
  const main = createEl("main", "menu-page");
  const menu = createEl("div", "menu");
  menu.classList.add("container");

  menu.appendChild(createCard("Pizza", "Lots of cheese, many dough and many toppings", pizza));
  menu.appendChild(createCard("Kebab", "Delicious, nutritious, ready-available at your local kebab store", kebab));
  menu.appendChild(createCard("Hot-dog", "Simple, cheap, delicious hot dawg (hot sausage inside buns)", hotdog));

  main.appendChild(menu);

  return main;
}

/*

  <main>
    <header>
    <div class="menu">
      div.card
        p{dish name}  
        p{dish descrption}
      div.card
        p{dish name}  
        p{dish descrption}
      div.card
        p{dish name}  
        p{dish descrption}
    </div> 
  </main>


*/