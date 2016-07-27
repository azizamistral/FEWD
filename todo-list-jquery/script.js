// var form = ("#new-item-form");
// var input = ("#new-item-input");
// var list = ("#todo-list");
//
// function newItem(groceryThing) {
//   var li = ("<li>");
//   var span = ("<span>");
//   var checkbox = ("input");
//   var label = ("label");
//
//   list.append(li).append(label);
//   label.append(checkbox).attr("type","checkbox");
//   label.append(span).text(groceryThing.trim( ));
// }
//
// function formSubmitted(event) {
//   event.preventDefault();
//
//   input.val().split.forEach(newItem);
// }

// CORRECT CODE HERE

$("#new-item-form").on("submit", formSubmitted);

function addListItem(listItemText) {
  var listItem = $("<li>").appendTo("#todo-list");
  var label = $("<label>").appendTo("listItem");
  $("<input>").attr("type", "checkbox").appendTo(label);
  $("<span>").text(listItemText.trim()).appendTo(label);
}

function formSubmitted(event) {
  event.preventDefault();

  $("#new-item-input").val().split(",").forEach(addListItem);
}
