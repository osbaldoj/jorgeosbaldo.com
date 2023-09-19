const mainContainer = document.querySelector(".mainContainer");
const tabButtons = document.querySelectorAll(".tabButton");

// mainContainer.innerHTML = home;
loadPage("home.html");

function loadPage(file) {
  return fetch(file)
    .then((response) => response.text())
    .then((html) => {
      mainContainer.innerHTML = html;
    })
    .catch((error) => {
      console.log(error);
    });
}

tabButtons.forEach((tabButton) => {
  tabButton.addEventListener("click", (tabButton) => {
    removeActiveClass();

    tabButton.target.classList.add("active");

    loadMainContainer(tabButton.target.id);
  });
});

function removeActiveClass() {
  const activeBtn = document.querySelector(".active");
  activeBtn.classList.remove("active");
}

function loadMainContainer(html) {
  if (html == "home") {
    loadPage("home.html");
    return;
  }
  if (html == "games3d") {
    loadPage("games3d.html");
    return;
  }
  if (html == "games2d") {
    loadPage("games2d.html");
    return;
  }
  if (html == "jscript") {
    loadPage("jscript.html");
    return;
  }
  //   mainContainer.innerHTML = html;
}
