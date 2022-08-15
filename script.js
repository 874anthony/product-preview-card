const img = document.querySelector(".card__img");

const { innerWidth } = window;

if (innerWidth <= 600) {
  img.src = "images/image-product-mobile.jpg";
} else {
  img.src = "images/image-product-desktop.jpg";
}

window.addEventListener("resize", () => {
  const { innerWidth } = window;

  if (innerWidth <= 600) {
    img.src = "images/image-product-mobile.jpg";
  } else {
    img.src = "images/image-product-desktop.jpg";
  }
});
