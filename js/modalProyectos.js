// Get the modal
let modal = document.getElementById("myModal-1");
let modal2 = document.getElementById("myModal-2");
let modal3 = document.getElementById("myModal-3");
let modal4 = document.getElementById("myModal-4");
let modal5 = document.getElementById("myModal-5");
let modal6 = document.getElementById("myModal-6");

// Get the button that opens the modal
let btn = document.getElementById("myBtn-1");
let btn2 = document.getElementById("myBtn-2");
let btn3 = document.getElementById("myBtn-3");
let btn4 = document.getElementById("myBtn-4");
let btn5 = document.getElementById("myBtn-5");
let btn6 = document.getElementById("myBtn-6");

// Get the <span> element that closes the modal
let span = document.querySelectorAll(".close")[0];
let span2 = document.querySelectorAll(".close")[1];
let span3 = document.querySelectorAll(".close")[2];
let span4 = document.querySelectorAll(".close")[3];
let span5 = document.querySelectorAll(".close")[4];
let span6 = document.querySelectorAll(".close")[5];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
    modal2.style.display = "block";
}
btn3.onclick = function() {
    modal3.style.display = "block";
}
btn4.onclick = function() {
    modal4.style.display = "block";
}
btn5.onclick = function() {
    modal5.style.display = "block";
}
btn6.onclick = function() {
    modal6.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span.onclick  = function() {
    modal.style.display = "none";
}
span2.onclick  = function() {
    modal2.style.display = "none";
}
span3.onclick  = function() {
    modal3.style.display = "none";
}
span4.onclick  = function() {
    modal4.style.display = "none";
}
span5.onclick  = function() {
    modal5.style.display = "none";
}
span6.onclick  = function() {
    modal6.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (
    event.target == modal || 
    event.target == modal2 || 
    event.target == modal3 || 
    event.target == modal4 ||
    event.target == modal5 ||
    event.target == modal6 
    ) {

    modal.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
    modal5.style.display = "none";
    modal6.style.display = "none";


  }
}