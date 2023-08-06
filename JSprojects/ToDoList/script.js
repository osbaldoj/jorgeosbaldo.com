// let items = [];

const addItem = document.querySelector(".addItem");
const inputNewItem = document.querySelector(".newItem");
const itemsBox = document.querySelector(".itemsBox");
const deleteAllBtn = document.querySelector(".deleteAllButton");
let items = document.querySelectorAll(".item");

getStorage();
addCheckListener();

function getStorage() {
  const items = localStorage.getItem("items");
  if (items) {
    itemsBox.innerHTML = items;
  }
}

function updateStorage() {
  localStorage.setItem("items", itemsBox.innerHTML);
}

function AddItem() {
  if (inputNewItem.value == "") return;
  const item = inputNewItem.value;
  inputNewItem.value = "";
  const html = `    
    <div class="item newItem">
      <p> ${item} </p>
    </div>`;
  itemsBox.insertAdjacentHTML("beforeend", html);
  const newItem = document.querySelector(".newItem");
  newItem.addEventListener("click", (e) => {
    e.target.classList.toggle("checked");
    newItem.classList.remove("newItem");
  });
  updateStorage();
}

function addCheckListener() {
  items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.target.classList.toggle("checked");
      // item.removeAttribute("haventAddListener");
      updateStorage();
    });
  });
}

//Listeners

addItem.addEventListener("click", () => {
  AddItem();
});

inputNewItem.addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    AddItem();
  }
});

deleteAllBtn.addEventListener("click", () => {
  itemsBox.innerHTML = "";
  updateStorage();
});
