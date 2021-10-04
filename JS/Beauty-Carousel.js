let beautyRows = Array.from(
  document.querySelectorAll(".beauty .container .row")
);
let beautyCurrent = 1;
let gooPrev = document.getElementById("gooPrev");
let gooNext = document.getElementById("gooNext");
let myBull = document.querySelector(".beauty .container .myBull");

/***********************************************
 * ******** Buttons  **********
 ***********************************************/

function gooNext_() {
  gooNext.classList.contains("disabled") ? false : beautyCurrent++;
  myCheckerFun();
}

function gooPrev_() {
  gooPrev.classList.contains("disabled") ? false : beautyCurrent--;
  myCheckerFun();
}

gooNext.onclick = gooNext_;
gooPrev.onclick = gooPrev_;

/***********************************************
 * ******** Create UElement**********
 ***********************************************/

let UElement = document.createElement("ul");
UElement.setAttribute("id", "UElement-pagination");
UElement.className = "list-unstyled";

/***********************************************
 * ******** Create MyLi**********
 ***********************************************/

for (let i = 1; i <= beautyRows.length; i++) {
  let LiElement = document.createElement("li");
  LiElement.setAttribute("data-go", i);
  LiElement.appendChild(document.createTextNode(i));

  UElement.appendChild(LiElement);
}

myBull.appendChild(UElement);

/***********************************************
 * ******** Get UElement& MyLi**********
 ***********************************************/

let createdLiElement = Array.from(
  document.querySelectorAll("#UElement-pagination li")
);

for (let i = 0; i < createdLiElement.length; i++) {
  createdLiElement[i].onclick = function () {
    beautyCurrent = parseInt(this.getAttribute("data-go"));
    myCheckerFun();
  };
}

/***********************************************
 * ******** Check Function **********
 ***********************************************/

function myCheckerFun() {
  beautyRows.forEach((row) => {
    row.classList.remove("d-none");
  });

  createdLiElement.forEach((li) => {
    li.classList.remove("active");
  });

  beautyRows[beautyCurrent - 1].classList.add("d-none");

  createdLiElement[beautyCurrent - 1].classList.add("active");

  if (beautyCurrent == 1) {
    gooPrev.classList.add("disabled");
  } else {
    gooPrev.classList.remove("disabled");
  }

  if (beautyCurrent == beautyRows.length) {
    gooNext.classList.add("disabled");
  } else {
    gooNext.classList.remove("disabled");
  }
}
myCheckerFun();
