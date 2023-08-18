import './style.css'
import { createEl } from "../../utils";
import milkshake from './imgs/uncle-spill.png'
import manicotti from './imgs/manicott.jpg';
import ziti from './imgs/Baked-Ziti.jpg';
import pulp from './imgs/somepulp.jpg';
import johnycakes from './imgs/johnycakes.jpg';
import blenderBurst from './imgs/uncle.png';
import gabagool from './imgs/gabagoo.jpg';
import spaghetti from './imgs/spaghetti.png';

function createCard(name, description, imgURL) {
  const card = createEl("div", "card");
  const topDiv = createEl("div");
  const p1 = createEl("p");
  const p2 = createEl("p");
  p1.textContent = name;
  p2.textContent = description;
  topDiv.appendChild(p1);
  topDiv.appendChild(p2);

  const imgDiv = createEl("div")
  const img = createEl("img");
  img.src = imgURL;
  imgDiv.appendChild(img);

  card.appendChild(topDiv);
  card.appendChild(imgDiv);

  return card;
}

export default function createMenu() {
  const main = createEl("main", "menu-page");
  const menu = createEl("div", "menu");
  menu.classList.add("container");
  menu.appendChild(createCard("Avocado tuna milkshake", "Uncle jun while recovering from hospital unable to eat normal food", milkshake));
  menu.appendChild(createCard("Manicotti", "Phil Leotardo most wanted meal while incarcerated for 20 years", manicotti));
  menu.appendChild(createCard("Ziti", `The last meal that Karen, Bobby Baccalieri wife has made which was in the freezer for a long time`, ziti));
  menu.appendChild(createCard("Orange juice with some pulp", `Tony wants an orange juice that has small quantity of pulp`, pulp));
  menu.appendChild(createCard("Johnycakes", `Cakes from Johnny that Vito adores`, johnycakes));
  menu.appendChild(createCard("Milkshake explosion", `Uncle Jun forgets to close the lid on the blender`, blenderBurst));
  menu.appendChild(createCard("Gabagool (capicola)", `Woke up this morning, got some gabagool..`, gabagool));
  menu.appendChild(createCard("Spaghetti with gravy by Ralphie", `Put the pasta back in the pot, add a little gravy, stir for 45 seconds`, spaghetti));


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