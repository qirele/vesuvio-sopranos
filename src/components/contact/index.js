import './style.css';
import { createEl } from "../../utils";
import artie1 from './imgs/artie.jpeg';
import artie2 from './imgs/artie2.jpg';
import artie3 from './imgs/artieGun.jpg';
import artie4 from './imgs/kitchen.png';

function createPara(text) {
  const p = createEl("p");
  p.textContent = text;
  return p;
}

export default function createContact() {
  const main = createEl("main", "contact-page");
  const imgDiv = createEl("div", "img-wrapper");
  const img = createEl("img");
  const img2 = createEl("img");
  const img3 = createEl("img");
  const img4 = createEl("img");
  img.src = artie1;
  img2.src = artie2;
  img3.src = artie3;
  img4.src = artie4;
  imgDiv.appendChild(img);
  imgDiv.appendChild(img2);
  imgDiv.appendChild(img3);
  imgDiv.appendChild(img4);

  const rightDiv = createEl("div", "contact-right");
  const h2 = createEl("h2");
  h2.textContent = `Name's Artie Bucco and I'm the chef of 'Vesuvio'`;
  const address = createEl("div");
  address.appendChild(createPara("New Jersey"));
  address.appendChild(createPara("5091-8712-900"));
  address.appendChild(createPara("artiebucco@vesuvio.com"));
  rightDiv.appendChild(h2);
  rightDiv.appendChild(createPara("Book a table at"));
  rightDiv.appendChild(address);


  main.appendChild(imgDiv);
  main.appendChild(rightDiv);

  return main;
}
