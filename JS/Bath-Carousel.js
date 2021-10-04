let bathRows = Array.from(document.querySelectorAll(".bath .container .row"));
let bathCurrent = 1;
let goPrev = document.getElementById("goPrev");
let goNext = document.getElementById("goNext");
let myBullets = document.querySelector(".bath .container .myBullets");

/***********************************************
 * ******** Buttons  **********
 ***********************************************/

function goNext_() {
  goNext.classList.contains("disabled") ? false : bathCurrent++;
  myChecker();
}

function goPrev_() {
  goPrev.classList.contains("disabled") ? false : bathCurrent--;
  myChecker();
}

goNext.onclick = goNext_;
goPrev.onclick = goPrev_;

/***********************************************
 * ******** Create UlElement**********
 ***********************************************/

let UlElement = document.createElement("ul");
UlElement.setAttribute("id", "UlElement-pagination");
UlElement.className = "list-unstyled";

/***********************************************
 * ******** Create MyLi**********
 ***********************************************/

for (let i = 1; i <= bathRows.length; i++) {
  let MyLiElement = document.createElement("li");
  MyLiElement.setAttribute("data-forced", i );
  MyLiElement.appendChild(document.createTextNode(i));

  UlElement.appendChild(MyLiElement);
}

myBullets.appendChild(UlElement);

/***********************************************
 * ******** Get UlElement& MyLi**********
 ***********************************************/

let createdMyLiElement = Array.from(
  document.querySelectorAll("#UlElement-pagination li")
);

for (let i = 0; i < createdMyLiElement.length; i++) {
  createdMyLiElement[i].onclick = function () {
    bathCurrent = parseInt(this.getAttribute("data-forced"));
    myChecker();
  };
}

/***********************************************
 * ******** Check Function **********
 ***********************************************/

function myChecker() {
  bathRows.forEach((row) => {
    row.classList.remove("d-none");
  });

  createdMyLiElement.forEach((li) => {
    li.classList.remove("active");
  });

  bathRows[bathCurrent - 1].classList.add("d-none");

  createdMyLiElement[bathCurrent - 1].classList.add("active");

  if (bathCurrent == 1) {
    goPrev.classList.add("disabled");
  } else {
    goPrev.classList.remove("disabled");
  }

  if (bathCurrent == bathRows.length) {
    goNext.classList.add("disabled");
  } else {
    goNext.classList.remove("disabled");
  }
}
myChecker();
