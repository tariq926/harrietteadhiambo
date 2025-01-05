const menu = document.getElementById("menu");
const closeButton = document.getElementById("close-mobile");
const nav = document.getElementById("nav-mobile");
const navLink = document.querySelectorAll(".nav-link");

menu.addEventListener("click", () => {
  nav.classList.add("show");
});

closeButton.addEventListener("click", () => {
  nav.classList.remove("show");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
});

document.getElementById('project1-highlights').addEventListener('click', function() {
  window.location.href = 'project1-highlights.html';
});

document.getElementById('project1-details').addEventListener('click', function() {
  window.location.href = 'project1-details.html';
});

document.getElementById('project2-highlights').addEventListener('click', function() {
  window.location.href = 'project2-highlights.html';
});

document.getElementById('project2-details').addEventListener('click', function() {
  window.location.href = 'project2-details.html';
});

document.getElementById('project3-highlights').addEventListener('click', function() {
  window.location.href = 'project3-highlights.html';
});

document.getElementById('project3-details').addEventListener('click', function() {
  window.location.href = 'project3-details.html';
});

document.getElementById('project4-highlights').addEventListener('click', function() {
  window.location.href = 'project4-highlights.html';
});

document.getElementById('project4-details').addEventListener('click', function() {
  window.location.href = 'project4-details.html';
});

document.getElementById('project5-highlights').addEventListener('click', function() {
  window.location.href = 'project5-highlights.html';
});

document.getElementById('project5-details').addEventListener('click', function() {
  window.location.href = 'project5-details.html';
});

document.getElementById('project6-highlights').addEventListener('click', function() {
  window.location.href = 'project6-highlights.html';
});

document.getElementById('project6-details').addEventListener('click', function() {
  window.location.href = 'project6-details.html';
});