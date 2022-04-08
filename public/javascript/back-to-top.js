
///////////////////////////////////////////////
/// BOUTON RETOUR EN HAUT (back to the top) ///
///////////////////////////////////////////////

// obtenir le bouton
let mybutton = document.getElementById("btn-back-to-the-top");

// quand l'utilisateur scroll vers le bas de 40px, faire apparaître le bouton
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
// quand l'utilisateur clique sur le bouton, scroller vers le haut du document

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
