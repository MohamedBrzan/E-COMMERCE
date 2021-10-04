let PlusEle = document.querySelectorAll(".plus");
let MinusEle = document.querySelectorAll(".minus");

function MinusClick() {
  MinusEle.forEach((minus) => {
    minus.onclick = () => {
      let n = minus.nextElementSibling.textContent;
      --n;
      minus.nextElementSibling.textContent = n;
      if (minus.nextElementSibling.textContent <= 0) {
        minus.nextElementSibling.textContent = 0;
      }
    };
  });
}

MinusClick();

function PlusClick() {
  PlusEle.forEach((plus) => {
    plus.onclick = () => {
      let n = plus.previousElementSibling.textContent;
      ++n;
      plus.previousElementSibling.textContent = n;
    };
  });
}

PlusClick();

let formChecker = document.querySelector(".form-checker");
let inputChecker = document.querySelector(".form-checker input");

// Form Register That Have Checkbox

formChecker.onclick = () => {
  inputChecker.toggleAttribute("checked");
};
