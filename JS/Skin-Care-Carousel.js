let skinCareRows = Array.from(
  document.querySelectorAll(".skin-care .container .row")
);
let myCurrent = 1;
let swipeLeft = document.getElementById("nextI");
let swipeRight = document.getElementById("prevI");
let indicator = document.querySelector(".skin-care .container .indicator");

/***********************************************
 * ******** Buttons  **********
 ***********************************************/

function nxt_() {
  swipeLeft.classList.contains("disabled") ? false : myCurrent++;
  Checker();
}

function prev_() {
  swipeRight.classList.contains("disabled") ? false : myCurrent--;
  Checker();
}

swipeLeft.onclick = nxt_;
swipeRight.onclick = prev_;

/***********************************************
 * ******** Create MyUl**********
 ***********************************************/

let MyUl = document.createElement("ul");
MyUl.setAttribute("id", "myUL-pagination");
MyUl.className = "list-unstyled";

/***********************************************
 * ******** Create MyLi**********
 ***********************************************/

for (let i = 1; i <= skinCareRows.length; i++) {
  let MyLi = document.createElement("li");
  MyLi.setAttribute("data-power", i);
  MyLi.appendChild(document.createTextNode(i));

  MyUl.appendChild(MyLi);
}

indicator.appendChild(MyUl);

/***********************************************
 * ******** Get MyUl& MyLi**********
 ***********************************************/

let createdMyLi = Array.from(document.querySelectorAll("#myUL-pagination li"));

for (let i = 0; i < createdMyLi.length; i++) {
  createdMyLi[i].onclick = function () {
    myCurrent = parseInt(this.getAttribute("data-power"));
    Checker();
  };
}

/***********************************************
 * ******** Check Function **********
 ***********************************************/

function Checker() {
  skinCareRows.forEach((row) => {
    row.classList.remove("d-flex");
  });

  createdMyLi.forEach((li) => {
    li.classList.remove("active");
  });

  skinCareRows[myCurrent - 1].classList.add("d-flex");

  createdMyLi[myCurrent - 1].classList.add("active");

  if (myCurrent == 1) {
    swipeRight.classList.add("disabled");
  } else {
    swipeRight.classList.remove("disabled");
  }

  if (myCurrent == skinCareRows.length) {
    swipeLeft.classList.add("disabled");
  } else {
    swipeLeft.classList.remove("disabled");
  }
}
Checker();
