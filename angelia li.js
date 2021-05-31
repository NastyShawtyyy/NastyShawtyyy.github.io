function myFunction1() {
  var txt;
  var person = prompt("Who Is He?:");
  if (person == "Mario" || person == "cancel") {
    txt = "Congradulations My friend! You Did Great Job~~&#128151";
  } else {
    txt = "Come On! Friends, I Know You Know It.&#9994";
  }
  document.getElementById("demo2").innerHTML = txt;
}