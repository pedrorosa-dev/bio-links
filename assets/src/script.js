let rail = document.getElementById("rail");
let body = document.querySelector("body");
let titleLogo = document.querySelector(".title-logo");
let dono = document.querySelector(".dono");
let logo = document.querySelector(".logo");

rail.addEventListener("click", () => {
  rail.classList.toggle("dark");
  body.classList.toggle("dark");
  titleLogo.classList.toggle("dark");
  dono.classList.toggle("dark");
  logo.classList.toggle("dark");
});
