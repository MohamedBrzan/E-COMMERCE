let hairCareRows = Array.from(
  document.querySelectorAll(".hair-care .container .row")
);
let myHairCurrent = 1;
let swpLeft = document.getElementById("last");
let swpRight = document.getElementById("first");
let myIndicators = document.querySelector(".hair-care .container .bullets");

/***********************************************
 * ******** Buttons  **********
 ***********************************************/

function nextEle_() {
  swpLeft.classList.contains("disabled") ? false : myHairCurrent++;
  checker();
}

function prevEle_() {
  swpRight.classList.contains("disabled") ? false : myHairCurrent--;
  checker();
}

swpLeft.onclick = nextEle_;
swpRight.onclick = prevEle_;

/***********************************************
 * ******** Create MyUl**********
 ***********************************************/

let MyUlEle = document.createElement("ul");
MyUlEle.setAttribute("id", "myPagination");
MyUlEle.className = "list-unstyled";

/***********************************************
 * ******** Create MyLi**********
 ***********************************************/

for (let i = 1; i <= hairCareRows.length; i++) {
  let MyLiEle = document.createElement("li");
  MyLiEle.setAttribute("data-force", i);
  MyLiEle.appendChild(document.createTextNode(i));

  MyUlEle.appendChild(MyLiEle);
}

myIndicators.appendChild(MyUlEle);

/***********************************************
 * ******** Get MyUl& MyLi**********
 ***********************************************/

let createdMyLiEle = Array.from(document.querySelectorAll("#myPagination li"));

for (let i = 0; i < createdMyLiEle.length; i++) {
  createdMyLiEle[i].onclick = function () {
    myHairCurrent = parseInt(this.getAttribute("data-force"));
    checker();
  };
}

/***********************************************
 * ******** Check Function **********
 ***********************************************/

function checker() {
  hairCareRows.forEach((row) => {
    row.classList.remove("d-none");
  });

  createdMyLiEle.forEach((li) => {
    li.classList.remove("active");
  });

  hairCareRows[myHairCurrent - 1].classList.add("d-none");

  createdMyLiEle[myHairCurrent - 1].classList.add("active");

  if (myHairCurrent == 1) {
    swpRight.classList.add("disabled");
  } else {
    swpRight.classList.remove("disabled");
  }

  if (myHairCurrent == hairCareRows.length) {
    swpLeft.classList.add("disabled");
  } else {
    swpLeft.classList.remove("disabled");
  }
}
checker();
