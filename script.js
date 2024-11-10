let numButtonClicks = 0;
function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("mainDiv").textContent =
        "Button Clicked times: " + numButtonClicks;
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "logo") {
    x.className += "responsive";
  } else {
    x.className = "logo";
  }
}