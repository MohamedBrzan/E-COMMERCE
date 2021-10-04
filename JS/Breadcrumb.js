const tab = document.querySelectorAll(".tab");
const panels = document.querySelector(".panels");
const panel = document.querySelectorAll(".panel");

function onTabClick(event) {
  tab.forEach((tab) => {
    tab.classList.remove("fixed");
  });

  panel.forEach((panel) => {
    panel.classList.remove("fixed");
  });

  // activate new tabs and panel
  event.target.classList.add("fixed");

  panels
    .getElementsByClassName(event.target.getAttribute("data-main"))[0]
    .classList.add("fixed");
}

tab.forEach((tab) => {
  tab.addEventListener("click", onTabClick);
});

const tabCheck = document.querySelectorAll(".tabCheck");
const panelsCheck = document.querySelector(".panelsCheck");
const panelCheck = document.querySelectorAll(".panelCheck");
const mySpans = document.querySelectorAll(".checkout .row .circle");
const Remover = document.querySelectorAll(".remove");

function TabClick(event) {
  tabCheck.forEach((tab) => {
    tab.classList.remove("fixed");
  });

  panelCheck.forEach((panel) => {
    panel.classList.remove("fixed");
  });

  // activate new tabs and panel
  event.target.classList.add("fixed");

  panelsCheck
    .getElementsByClassName(event.target.getAttribute("data-mainCheck"))[0]
    .classList.add("fixed");

  // Span Circle Switcher

  mySpans.forEach((span) => {
    span.classList.toggle("checked");
  });
}

tabCheck.forEach((tab) => {
  tab.addEventListener("click", TabClick);
});

// Cart Product Remove

Remover.forEach((remove) => {
  remove.onclick = () => {
    remove.previousElementSibling.remove();
    remove.remove();
  };
});

const track = document.querySelector(".track");

track.onclick = () => {
  document.querySelector(".buy").classList.add("panel");
  document.querySelector(".modal-backdrop").classList.add("panel");
};
