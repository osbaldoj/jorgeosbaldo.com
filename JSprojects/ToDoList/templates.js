class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <head>
        <meta charset="utf-8">
        <title>To do list</title>
        <link href="styles.css" rel="stylesheet">
        </head>
        `;
  }
}
customElements.define("my-header", MyHeader);

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer>
        Copyright 2023 Jorge Osbaldo
        </footer>
        `;
  }
}
customElements.define("my-footer", MyFooter);
