import { createEl } from "../../utils";

export default function createContact() {
  const main = createEl("main", "contact-page");
  const contactDiv = createEl("div", "contact-wrapper");
  contactDiv.textContent = "Contact me at New Jersey";

  main.appendChild(contactDiv);

  return main;
}

/*

  <main>
    <header>
    div.contact
  </main>


*/