const paintProductsOnCards = (
  productsToPaint,
  productsImages,
  productsTitle,
  productsPrices
) => {
  productsImages.forEach((productImg, index) => {
    productImg.src = productsToPaint[index].image;
  });
  productsTitle.forEach((productTitle, index) => {
    productTitle.textContent = productsToPaint[index].title.slice(0, 25);
  });
  productsPrices.forEach((productPrices, index) => {
    productPrices.textContent = "$ " + productsToPaint[index].price;
  });
};

export default paintProductsOnCards;
