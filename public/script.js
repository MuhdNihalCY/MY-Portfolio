// Hide the loader by default
// document.querySelector(".LoaderMain").style.display = "none";
document.querySelector(".LoaderMain").style.display = "flex";
document.querySelector(".Content").style.display = "none";

// Show the loader when the page is loaded
window.addEventListener("load", function() {
});

// Hide the loader after 3 seconds
setTimeout(function() {
  document.querySelector(".LoaderMain").style.display = "none";
  document.querySelector(".Content").style.display = "block";
}, 3000);


function toggleMenu() {
    const slidingMenu = document.querySelector(".menu");
    slidingMenu.classList.toggle("active");
    const slidingClose = document.querySelector(".SmallScreen");
    slidingClose.classList.toggle("active");
  }

