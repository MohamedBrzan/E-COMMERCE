/*****************************
 **Related Carousel**********
 ******************************/

let myNxtButton = document.querySelectorAll(".myNext");
let myPrvButton = document.querySelectorAll(".myPrev");
let related_product = Array.from(
  document.querySelectorAll(".related  .product")
);
let related_product_page = Math.ceil(related_product.length / 4);

let movePerM = 25;
let maxMoveM = 203;

// mobile_view
let related_mob_view = window.matchMedia("(max-width: 768px)");
if (related_mob_view.matches) {
  movePerM = 50;
  maxMoveM = 100;
}
let right_ = () => {
  l += movePerM;
  if (related_product == 1) {
    l = 0;
  }
  for (const i of related_product) {
    if (l > maxMoveM) {
      l -= movePerM;
    }

    i.style.left = "-" + l + "%";
  }
};
let left_ = () => {
  l -= movePerM;
  if (l <= 0) {
    l = 0;
  }
  for (const i of related_product) {
    if (related_product_page > 1) {
      i.style.left = "-" + l + "%";
    }
  }
};

myNxtButton.forEach((next) => {
  next.onclick = right_;
});

myPrvButton.forEach((next) => {
  next.onclick = left_;
});
