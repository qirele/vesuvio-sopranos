function createEl(tag, className) {
  const el = document.createElement(tag);
  if (className)
    el.classList.add(className);
  return el;
}

export default function loadHome() {
  const contentDiv = document.querySelector("#content");

  const main = createEl("main", "main");

  const header = createEl("header", "header");
  const h1 = createEl("h1", "container");
  h1.textContent = `Artie Bucco's 'Vesuvio'`;
  header.appendChild(h1);

  const grid = createEl("div", "grid");
  const left = createEl("div", "left");
  const h2 = createEl("h2");
  h2.textContent = `Amazing restaurant from the show "The Sopranos"`;
  const p1 = createEl("p");
  p1.textContent = `Very nice chef, with great cooking skills. Loves being in the kitchen. Loves his customers. Especially his cousin.`;
  const p2 = createEl("p");
  p2.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi autem tempora nobis totam harum provident ipsam, repudiandae id, amet corporis sapiente quibusdam, distinctio maxime est iusto hic rerum magni. Ut voluptates saepe aut hic id!`;
  left.appendChild(h2);
  left.appendChild(p1);
  left.appendChild(p2);
  const right = createEl("div", "right");
  grid.appendChild(left);
  grid.appendChild(right);

  main.appendChild(header);
  main.appendChild(grid);

  contentDiv.appendChild(main);
}

/*
      <main class="main">
        <div class="header">
          <h1 class="container">Artie Bucco's 'Vesuvio'</h1>
        </div>
        <div class="grid">
          <div class="left">
            <h2>Amazing restaurant from the show "The Sopranos"</h2>
            <p>
              Very nice chef, with great cooking skills. Loves being in the kitchen. Loves his customers. Especially his
              cousin.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi autem tempora nobis totam harum
              provident ipsam, repudiandae id, amet corporis sapiente quibusdam, distinctio maxime est iusto hic rerum
              magni. Ut voluptates saepe aut hic id!
            </p>
          </div>
          <div class="right"></div>
        </div>
      </main>


*/