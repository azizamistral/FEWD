var link = document.querySelector(".like-link");
var form = document.querySelector("#new-comment");

link.addEventListener("click", like);
form.addEventListener("submit", comment);

function like(event) {
  event.preventDefault();
  var addLike = document.querySelector(".like-count")
  var number = parseInt(addLike.textContent);
  addLike.textContent = number + 1;
  // Your code for like goes here
}

function comment(event) {
  event.preventDefault();
  var kindWords = document.createElement("div")
  var body = document.querySelector("#new-comment-body")
  var comments = document.querySelector("#comments");
  kindWords.textContent = body.value;
  kindWords.classList.add("comment");
  comments.appendChild(kindWords);
  form.reset();
  // Your code for comments goes here
}
