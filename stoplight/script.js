
var middle = document.querySelector(".middle");
setInterval(middle.classList.toggle("yellowOn"),1000);

    function redLight() {
    top.classList.add("redOn");
    middle.classList.remove("yellowOn");
    bottom.classList.remove("greenOn");
  }

  function yellowLight() {
    middle.classList.add("yellowOn");
    top.classList.remove("redOn");
    bottom.classList.remove("greenOn");
  }

  function blinkLight() {
    middle.classList.toggle("yellowOn")
    top.classList.remove("redOn");
    bottom.classList.remove("greenOn");
  }

  function greenLight() {
    bottom.classList.add("greenOn");
    top.classList.remove("redOn");
    middle.classList.remove("yellowOn");
  }
