var form = document.querySelector("#new-item-form");
var ul = document.querySelector("#todo-list");
var input = document.querySelector("#new-item-input");

function newItem(groceryThing){
  var li = document.createElement("li");
  var span = document.createElement("span");
  var checkbox = document.createElement("input");
  var label = document.createElement("label");

  ul.appendChild(li).appendChild(label);
  label.appendChild(checkbox).setAttribute("type","checkbox");
  label.appendChild(span).textContent = groceryThing.trim( );
}

function formSubmitted(event) {
  event.preventDefault();

  input.value.split(",").forEach(newItem);

  // var li = document.createElement("li");
  // var span = document.createElement("span");
  // var checkbox = document.createElement("input");
  // var label = document.createElement("label");

  // ul.appendChild(li).appendChild(label);
  // label.appendChild(checkbox).setAttribute("type","checkbox");
  // label.appendChild(span).textContent = input.value;

  form.reset();
}

form.addEventListener("submit", formSubmitted);
