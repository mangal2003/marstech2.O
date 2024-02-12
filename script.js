var menuIcon = document.getElementById("menu");
var sheet = document.getElementById("sheets");
var triFri = document.getElementById("tri-fri");
var menuItems = document.getElementById("listOfSubSec");
var menulines = document.getElementById("menulines");
var cross = document.getElementById("cross");
var content = document.getElementById("mainContainer");

function showList() {
  menuItems.style.top = "3rem";
  menulines.style.display = "none";
  cross.style.display = "block";
}
function showListReverse() {
  menuItems.style.top = "-4rem";
  cross.style.display = "none";
  menulines.style.display = "block";
}

function triFriOnly() {
  content.style.display = "none";
  sheet.style.display = "none";
  triFri.style.display = "block";
  showListReverse();
}
function sheetOnly() {
  content.style.display = "none";
  triFri.style.display = "none";
  sheet.style.display = "block";
  showListReverse();
}
function homeOnly() {
  content.style.display = "block";
  triFri.style.display = "none";
  sheet.style.display = "none";
  showListReverse();
}
