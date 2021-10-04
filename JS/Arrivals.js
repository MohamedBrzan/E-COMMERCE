/*****************************
 **Carousel High     **********
 ******************************/
let HomeH = document.querySelector(".home").offsetHeight;
let BreadcrumbH = document.querySelector(".Breadcrumb-sec").offsetHeight;
let CarouselH = (document.querySelector(".carousel-inner").style.height =
  window.innerHeight - (HomeH + BreadcrumbH) + "px");

/*****************************
 **Arrivals Carousel**********
 ******************************/

let nextB = document.getElementById("nxt");
let prevB = document.getElementById("prv");
let product = Array.from(
  document.querySelectorAll(".arrivals-carousel .product")
);
let product_page = Math.ceil(product.length / 4);

let l = 0;
let movePer = 25.34;
let maxMove = 203;
// mobile_view
let mob_view = window.matchMedia("(max-width: 768px)");
if (mob_view.matches) {
  movePer = 50.36;
  maxMove = 504;
}
let right_mover = () => {
  l += movePer;
  if (product == 1) {
    l = 0;
  }
  for (const i of product) {
    if (l > maxMove) {
      l -= movePer;
    }

    i.style.left = "-" + l + "%";
  }
};
let left_mover = () => {
  l -= movePer;
  if (l <= 0) {
    l = 0;
  }
  for (const i of product) {
    if (product_page > 1) {
      i.style.left = "-" + l + "%";
    }
  }
};

nextB.onclick = right_mover;
prevB.onclick = left_mover;

/*****************************
 **Top Seller Carousel**********
 ******************************/

let nextBu = document.getElementById("nextB");
let prevBu = document.getElementById("prevB");
let product_two = Array.from(
  document.querySelectorAll(".top-seller-carousel  .product")
);
let product_page_two = Math.ceil(product_two.length / 4);

// mobile_view
let mob_view_two = window.matchMedia("(max-width: 768px)");
if (mob_view_two.matches) {
  movePer = 50.36;
  maxMove = 504;
}
let right = () => {
  l += movePer;
  if (product_two == 1) {
    l = 0;
  }
  for (const i of product_two) {
    if (l > maxMove) {
      l -= movePer;
    }

    i.style.left = "-" + l + "%";
  }
};
let left = () => {
  l -= movePer;
  if (l <= 0) {
    l = 0;
  }
  for (const i of product_two) {
    if (product_page_two > 1) {
      i.style.left = "-" + l + "%";
    }
  }
};

nextBu.onclick = right;
prevBu.onclick = left;

/*****************************
 **Ambassador Carousel**********
 ******************************/

let myNextButton = document.getElementById("nextButton");
let myPrevButton = document.getElementById("prevButton");
let product_three = Array.from(
  document.querySelectorAll(".ambassadors-carousel  .product")
);
let product_page_three = Math.ceil(product_three.length / 4);

let movPer = 25;
let maxPer = 100;

// mobile_view
let mob_view_three = window.matchMedia("(max-width: 768px)");
if (mob_view_three.matches) {
  movPer = 25;
  maxPer = 100;
}
let right_move = () => {
  l += movPer;
  if (product_three == 1) {
    l = 0;
  }
  for (const i of product_three) {
    if (l > maxPer) {
      l -= movPer;
    }

    i.style.left = "-" + l + "%";
  }
};
let left_move = () => {
  l -= movPer;
  if (l <= 0) {
    l = 0;
  }
  for (const i of product_three) {
    if (product_page_three > 1) {
      i.style.left = "-" + l + "%";
    }
  }
};

myNextButton.onclick = right_move;
myPrevButton.onclick = left_move;
