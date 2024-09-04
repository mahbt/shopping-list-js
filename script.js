const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");

function addItem(e) {
  e.preventDefault();
  const newItem = itemInput.value;
  // Validate Input

  if (newItem === "") {
    alert("Please add an item");
    return;
  }
  // Creat List Item
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));
  const button = creatButton("remove-item btn-link text-red");
  li.appendChild(button);
  itemList.appendChild(li);
  itemInput.value = "";
}
function creatButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  const icon = creatIcon("fa-solid fa-xmark");
  button.appendChild(icon);
  return button;
}
function creatIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}
//Event Listeners
itemForm.addEventListener("submit", addItem);
