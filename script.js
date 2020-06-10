const container = document.querySelector(".container")

document.querySelector(".open-navbar-icon").
addEventListener("click", ( ) => {
    container.classList.add("change");
});

document.querySelector(".close-navbar-icon").
addEventListener("click", ( ) => {
    container.classList.remove("change");
});

const colors = ["#deeaee", "#b1cbbb", "#d5e1df", "#f0f0f0", "#c4b7a6"];
let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach(item => {
    item.style.cssText = `background-color: ${colors[i++]}`;
});



Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
    item.onclick = () => {
      item.parentElement.parentElement.classList.toggle("change");
    };
  });