function component() {
  const element = document.createElement('div');
  element.textContent = "Hello bruheems";
  return element;
}

document.body.appendChild(component());