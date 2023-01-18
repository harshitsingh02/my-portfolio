const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".links a");
const nav = document.querySelector("#navigation");
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxpFe_AYC5pyxmW5xnajhgBLY5KPAhOH7Gno7SQSAZyRvag_BGOuPcFm4_1GSQED3Am/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("smsg");

/*****Navigation Bar**********/
function showNav() {
  nav.classList.add("show");
  if (window.scrollY < 600) {
    nav.classList.remove("show");
  }
}

function hideNav() {
  if (window.scrollY < 600) {
    nav.classList.remove("show");
  }
}
var currPos = window.scrollY;
document.addEventListener("scroll", () => {
  if (window.scrollY < currPos) {
    //scroll up
    hideNav();
  } else {
    //scroll down
    showNav();
  }
  currPos = window.scrollY;
});
/******End Of Navigation */

function closeMenu() {
  navbar.classList.remove("open");
  document.body.classList.remove("stop-scrolling");
}

hamburger_menu.addEventListener("click", () => {
  if (!navbar.classList.contains("open")) {
    navbar.classList.add("open");
    document.body.classList.add("stop-scrolling");
  } else {
    closeMenu();
  }
});

links.forEach((link) => link.addEventListener("click", () => closeMenu()));

function lightMode() {
  var element = document.body;
  element.classList.toggle("light-mode");
}

window.addEventListener("scroll", function () {
  var scroll = document.querySelector(".scrollTop");
  scroll.classList.toggle("active", window.scrollY > 700);
});
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
//************** Filterable gallery ***************************/

$(document).ready(function () {
  $(".buttons").click(function () {
    $(this).addClass("active").siblings().removeClass("active");

    var filter = $(this).attr("data-filter");

    if (filter == "all") {
      $(".images").show(400);
    } else {
      $(".images")
        .not("." + filter)
        .hide(200);
      $(".images")
        .filter("." + filter)
        .show(400);
    }
  });
});

/*********** END of My work - portfolio ***************/

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      smsg.innerHTML = "Sent Successfully!!!!!";
      setTimeout(function () {
        smsg.innerHTML = "";
      }, 1000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

//Filter section
