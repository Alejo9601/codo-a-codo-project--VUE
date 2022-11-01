import { getProductsForCategory } from "./apiCalls.js";
import paintProductsOnCards from "./paintProductsOnCards.js";

const products = await getProductsForCategory("electronics", 9);

const productsImages = document.querySelectorAll(".product-card--md img");
const productsTitle = document.querySelectorAll(".product-card--md h5");
const productsPrices = document.querySelectorAll(".product-card--md p i");

const paintProductsPage = () => {
   paintProductsOnCards(
      products,
      productsImages,
      productsTitle,
      productsPrices
   );
};

paintProductsPage();

export default paintProductsPage;
