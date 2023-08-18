import './style.css'
import { createEl } from "../../utils";

export default function createHome() {
  const main = createEl("main", "home");
  main.classList.add("grid");

  const left = createEl("div", "left");
  const h2 = createEl("h2");
  const p1 = createEl("p");
  const p2 = createEl("p");
  p1.textContent = `Very nice chef, with great cooking skills. Loves being in the kitchen. Loves his customers. Especially the ones with close associations with Tony Soprano, his childhood friend.`;
  h2.textContent = `Amazing restaurant from the show "The Sopranos"`;
  p2.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi autem tempora nobis totam harum provident ipsam, repudiandae id, amet corporis sapiente quibusdam, distinctio maxime est iusto hic rerum magni. Ut voluptates saepe aut hic id!`;
  left.appendChild(h2);
  left.appendChild(p1);
  left.appendChild(p2);
  const right = createEl("div", "right");
  main.appendChild(left);
  main.appendChild(right);

  return main;
}