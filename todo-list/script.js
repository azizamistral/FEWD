var form = document.querySelector("#new-item-form");
var ul = document.querySelector("#todo-list");
var input = document.querySelector("#new-item-input")

function formSubmitted(event) {
  event.preventDefault();

  var li = document.createElement("li");
  var span = document.createElement("span");
  var checkbox = document.createElement("input");
  var label = document.createElement("label");

  ul.appendChild(li).appendChild(label);
  label.appendChild(checkbox).setAttribute("type","checkbox");
  label.appendChild(span).textContent = input.value;

  // Your code goes here...
  //input.value.split(",").forEach(formSubmitted);
  // forEach(listItem)

  form.reset();
}

form.addEventListener("submit", formSubmitted);
