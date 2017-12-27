let menu = document.getElementById("open");
let nav = document.getElementById("mobile");
let closeNav = document.getElementById("close");

menu.addEventListener("click", togglemenu);
closeNav.addEventListener("click", toggleback);

let toggle = false;
function togglemenu() {
  if (toggle) {
    nav.classList.remove("show"),
    toggle = false;
  }
  else {
    nav.classList.add("show"),
    toggle = true
  }
}

function toggleback() {
  if (toggle) {
    nav.classList.remove("show"),
    toggle = false;
  }
}


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 52.636878, lng: -1.139759},
    zoom: 8
    });
}

let userName = document.getElementById("user-name");
let returnName = document.getElementById("name")
let getName = document.getElementById("get-name");
let greeting = document.getElementById("greeting");

function greet(ev) {
  returnName.innerHTML = userName.value;
  ev.preventDefault();
  greeting.style.display = "block";
}

getName.addEventListener("submit", greet);
