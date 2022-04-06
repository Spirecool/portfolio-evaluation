
///////////////////////////////////////////////
/// BACK TO TOP BUTTON ///
///////////////////////////////////////////////

// get the button
let mybutton = document.getElementById("btn-back-to-the-top");

// when user scrolls down 40px, button appears
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 40 ||
    document.documentElement.scrollTop > 40
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// when user clicks on button, it scrolls up to the top of the document

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
