let myRows = Array.from(document.querySelectorAll(".makeup .container .row"));
let current = 1;
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
let indicators = document.querySelector(".makeup .container .indicators");

/***********************************************
 * ******** Buttons  **********
 ***********************************************/

function next() {
  nextButton.classList.contains("disabled") ? false : current++;
  Check();
}

function prev() {
  prevButton.classList.contains("disabled") ? false : current--;
  Check();
}

nextButton.onclick = next;
prevButton.onclick = prev;

/***********************************************
 * ******** Create Ul **********
 ***********************************************/

let Ul = document.createElement("ul");
Ul.setAttribute("id", "ul-pagination");
Ul.className = "list-unstyled";

/***********************************************
 * ******** Create Li **********
 ***********************************************/

for (let i = 1; i <= myRows.length; i++) {
  let Li = document.createElement("li");
  Li.setAttribute("data-target", i);
  Li.appendChild(document.createTextNode(i));

  Ul.appendChild(Li);
}

indicators.appendChild(Ul);

/***********************************************
 * ******** Get Ul & Li **********
 ***********************************************/

let createdUl = document.getElementById("ul-pagination");
let createdLi = Array.from(document.querySelectorAll("#ul-pagination li"));

for (let i = 0; i < createdLi.length; i++) {
  createdLi[i].onclick = function () {
    current = parseInt(this.getAttribute("data-target"));
    Check();
  };
}

/***********************************************
 * ******** Check Function **********
 ***********************************************/

function Check() {
  myRows.forEach((row) => {
    row.classList.remove("d-flex");
  });

  createdLi.forEach((li) => {
    li.classList.remove("active");
  });

  myRows[current - 1].classList.add("d-flex");

  createdLi[current - 1].classList.add("active");

  if (current == 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }

  if (current == myRows.length) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}
Check();
