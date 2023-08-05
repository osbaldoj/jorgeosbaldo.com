let items = [];

const addItem = document.querySelector(".addItem");
const inputNewItem = document.querySelector(".newItem");
const itemsBox = document.querySelector(".itemsBox");

addItem.addEventListener("click", () => {
  AddItem();
});

inputNewItem.addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    AddItem();
  }
});

const AddItem = () => {
  if (inputNewItem.value == "") return;
  const item = inputNewItem.value;
  inputNewItem.value = "";
  const html = `    
    <div class="item">
      <input type="checkbox"> <p> ${item} </p>
    </div>`;
  itemsBox.insertAdjacentHTML("beforeend", html);
};
