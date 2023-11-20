const hamburgerMenu = document.getElementById("hamburger");
let menu;
function hamburgerFunction() {
  const menuLink = document.querySelectorAll(".menuLink");
  if (menu) {
    menuLink.forEach((news) => {
      news.style.display = "none";
    });
    menu = false;
  } else {
    const menuheaderid = document.getElementById("menuheaderid");
    menuheaderid.style.paddingBottom = "20px";
    menuLink.forEach((news) => {
      news.style.display = "block";
    });
    menu = true;
  }
}

function checkWindowSize() {
  if (window.innerWidth === "730px") {
    const menuLink = document.querySelectorAll(".menuLink");
    menuLink.forEach((news) => {
      news.style.display = "block";
    });
  }
}

// Attach the function to the window resize event
window.addEventListener("resize", checkWindowSize);

// Call the function initially to check the window size when the page loads
checkWindowSize();
