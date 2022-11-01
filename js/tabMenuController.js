import { getProductsForCategory } from "./apiCalls.js";
import paintProductsOnCards from "./paintProductsOnCards.js";

//All products from API, at the start "data" inside of each object is empty
let allProducts = [
   {
      category: "electronics",
      data: [],
   },
   {
      category: "jewelery",
      data: [],
   },
   {
      category: "men's clothing",
      data: [],
   },
   {
      category: "women's clothing",
      data: [],
   },
];

//Gets all the necessary elements from the DOM (HTML)
const tabMenuClickables = document.querySelectorAll(".tabmenu-item__clickable");
const productsImages = document.querySelectorAll(".product-card--sm img");
const productsTitle = document.querySelectorAll(".product-card--sm h5");
const productsPrices = document.querySelectorAll(".product-card--sm p i");

//Gets all products from the API
const getProducts = async () => {
   let promises = [
      getProductsForCategory(allProducts[0].category, 3),
      getProductsForCategory(allProducts[1].category, 3),
      getProductsForCategory(allProducts[2].category, 3),
      getProductsForCategory(allProducts[3].category, 3),
   ];

   promises = await Promise.all(promises);

   promises.map((data, index) => {
      allProducts[index].data = data;
   });
};

//Paints products for corresponding category
const paintQuickAccessProducts = async (category) => {
   allProducts.map((products) => {
      if (products.category === category)
         paintProductsOnCards(
            products.data,
            productsImages,
            productsTitle,
            productsPrices
         );
   });
};

//Makes a tab look active
const makeActiveTab = (tab) => {
   tabMenuClickables.forEach((clickable) => {
      clickable.parentElement.classList.remove("active");
   });
   tab.target.parentElement.classList.add("active");
};

//Will be executed when the user clicks on a tab element
const handleTabClick = (clickedTab) => {
   //To achieve a manual transition effect
   const gridProducts = document.querySelector(".grid-products");
   gridProducts.style.opacity = "0";
   gridProducts.style.visibility = "hidden";

   //Making active the tab that was clicked
   makeActiveTab(clickedTab);

   //Painting the corresponding products for category and then aplying a manual transition effect
   paintQuickAccessProducts(clickedTab.target.textContent.toLowerCase()).then(
      () => {
         gridProducts.style.opacity = "1";
         gridProducts.style.visibility = "visible";
      }
   );
};

const loadQuickAccessProducts = () => {
   getProducts().then(() => {
      //Just for the first paint
      paintQuickAccessProducts("electronics");

      //Adding the onclick listener for each tab
      tabMenuClickables.forEach((element) => {
         element.addEventListener("click", handleTabClick);
      });
   });
};

export default loadQuickAccessProducts;
