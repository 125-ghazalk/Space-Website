function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "logo") {
    x.className += "responsive";
  } else {
    x.className = "logo";
  }
}
