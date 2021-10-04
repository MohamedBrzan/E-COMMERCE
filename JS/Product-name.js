/*************************************
 **Imgs
 ***************************************/

let miniImg = document.querySelectorAll(".mini");
let largeImg = document.querySelectorAll(".large");

miniImg.forEach((img) => {
  img.onclick = () => {
    largeImg.forEach((lgImg) => {
      lgImg.src = img.src;
    });
  };
});

/*************************************
 **showPanel
 ***************************************/

let showPanel = document.querySelectorAll(".showPanel");
let hide = document.querySelectorAll(".hide");

function OnShowClick() {
  // ShowPanel[0,1,2,3,4]
  showPanel.forEach((Show) => {
    Show.onclick = () => {
      hide.forEach((Hide) => {
        Hide.classList.toggle("panel");
      });
      if (
        Show.innerHTML
          .trim()
          .indexOf(
            `show more <i class="fas d-inline-block fa-chevron-down"></i>`
          )
      ) {
        Show.innerHTML = `show less <i class="fas d-inline-block fa-chevron-up"></i>`;
        Show.onclick = () => {
          if (
            Show.innerHTML ==
            `show less <i class="fas d-inline-block fa-chevron-up"></i>`
          ) {
            hide.forEach((Hide) => {
              Hide.classList.toggle("panel");
            });
            Show.innerHTML = `show more <i class="fas d-inline-block fa-chevron-down"></i>`;
          } else {
            hide.forEach((Hide) => {
              Hide.classList.toggle("panel");
            });
            Show.innerHTML = `show less <i class="fas d-inline-block fa-chevron-up"></i>`;
          }
        };
      }
    };
  });
}
OnShowClick();

/*************************************
 **showMore
 ***************************************/

let moreTabOne = document.querySelectorAll(".moreTabOne");
let says = document.querySelectorAll(".says");
let moreTabTwo = document.querySelectorAll(".moreTabTwo");
let say = document.querySelectorAll(".say");

/*************************************
 **showMoreOne
 ***************************************/

function OnShowTabOneClick() {
  // ShowPanel[0,1,2,3,4]
  moreTabOne.forEach((one) => {
    one.onclick = () => {
      says.forEach((says) => {
        says.classList.toggle("panel");
      });
      if (
        one.innerHTML
          .trim()
          .indexOf(
            `show more <i class="fas d-inline-block fa-chevron-down"></i>`
          )
      ) {
        one.innerHTML = `show less <i class="fas d-inline-block fa-chevron-up"></i>`;
        one.onclick = () => {
          if (
            one.innerHTML ==
            `show less <i class="fas d-inline-block fa-chevron-up"></i>`
          ) {
            says.forEach((says) => {
              says.classList.toggle("panel");
            });
            one.innerHTML = `show more <i class="fas d-inline-block fa-chevron-down"></i>`;
          } else {
            says.forEach((says) => {
              says.classList.toggle("panel");
            });
            one.innerHTML = `show less <i class="fas d-inline-block fa-chevron-up"></i>`;
          }
        };
      }
    };
  });
}
OnShowTabOneClick();

/*************************************
 **showMoreTwo
 ***************************************/

function OnShowTabTwoClick() {
  // ShowPanel[0,1,2,3,4]
  moreTabTwo.forEach((two) => {
    two.onclick = () => {
      say.forEach((say) => {
        say.classList.toggle("panel");
      });
      if (
        two.innerHTML
          .trim()
          .indexOf(
            `show more <i class="fas d-inline-block fa-chevron-down"></i>`
          )
      ) {
        two.innerHTML = `show less <i class="fas d-inline-block fa-chevron-up"></i>`;
        two.onclick = () => {
          if (
            two.innerHTML ==
            `show less <i class="fas d-inline-block fa-chevron-up"></i>`
          ) {
            say.forEach((say) => {
              say.classList.toggle("panel");
            });
            two.innerHTML = `show more <i class="fas d-inline-block fa-chevron-down"></i>`;
          } else {
            say.forEach((say) => {
              say.classList.toggle("panel");
            });
            two.innerHTML = `show less <i class="fas d-inline-block fa-chevron-up"></i>`;
          }
        };
      }
    };
  });
}

OnShowTabTwoClick();

let myBuy = document.querySelectorAll(".myBuy");
let buy = document.querySelectorAll(".buy");
let overlay = document.querySelectorAll(".modal-backdrop");

let myClose = document.querySelectorAll(".fa-times");

function onBuyClick() {
  myBuy.forEach((myBuy) => {
    myBuy.onclick = () => {
      buy.forEach((buy) => {
        buy.classList.toggle("panel");
      });
      overlay.forEach((overlay) => {
        overlay.classList.toggle("panel");
      });
    };
  });
}

onBuyClick();

function myCloseTab() {
  myClose.forEach((close) => {
    close.onclick = () => {
      buy.forEach((buy) => {
        buy.classList.add("panel");
      });
      overlay.forEach((overlay) => {
        overlay.classList.add("panel");
      });
    };
  });
}

myCloseTab();
