import { getProductsForCategory } from "./apiCalls.js";
import paintProductsOnCards from "./paintProductsOnCards.js";

const productsImages = document.querySelectorAll(
  ".newproducts .product-card img"
);
const productsTitle = document.querySelectorAll(
  ".newproducts .product-card h5"
);
const productsPrices = document.querySelectorAll(
  ".new products .product-card p i"
);

const products = await getProductsForCategory("electronics", 4, "desc");

const paintNewProducts = () => {
  paintProductsOnCards(products, productsImages, productsTitle, productsPrices);
};

export default paintNewProducts;
