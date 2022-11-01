//Gets all the necessary elements from the DOM
const productCards = document.querySelectorAll(".product-card");

const cartDetail = document.querySelector(".cart__detail");
const cartDetailUl = document.querySelector(".cart__detail ul");
const cartButton = document.querySelector(".btn-cart");

const countBubble = cartButton.children[1];

let cart = [];

//Get product Object from DOM element
const newProductObject = (productFromDom) => {
   const productImg = productFromDom.children[0];
   const productDescription = productFromDom.children[1];
   const productPrice = productDescription.children[1];

   return {
      id: cart.length + 1,
      img: productImg.src,
      name: productDescription.children[0].textContent,
      price: parseInt(productPrice.children[1].textContent.replace("$ ", "")),
   };
};

//Adds a product to the cart
const setProductOnCart = (product) => {
   addItemsToCartArray(product);

   let productItem = document.createElement("li");
   let btnRemoveProduct = document.createElement("button");

   btnRemoveProduct.textContent = "remove";
   btnRemoveProduct.addEventListener("click", handleButtonRemoveFromCart);

   productItem.textContent = product.name;
   productItem.appendChild(btnRemoveProduct);
   productItem.setAttribute("id", product.id);

   cartDetailUl.appendChild(productItem);

   updateCurrentCartSum();
};

/**
 * Removes the product from the cart
 * @param {Element} ListItem
 */
const removeProductFromCart = (ListItem) => {
   cartDetailUl.removeChild(ListItem);
   removeItemsFromCartArray(ListItem);
   updateCurrentCartSum();
};

/**
 * Updates currentCartSum
 */
const updateCurrentCartSum = () => {
   const domSum = document.querySelector(".cart__detail__current-sum");
   let auxSum = 0;

   cart.forEach((product) => {
      auxSum = auxSum + product.price;
   });

   domSum.textContent = "$ " + auxSum;
};

//Decrements the current count of products on the cart
const removeItemsFromCartArray = (productToRemove) => {
   cart = cart.filter(
      (cartProduct) => cartProduct.id !== parseInt(productToRemove.id)
   );

   if (cart.length === 0) {
      countBubble.classList.remove("visible");
   }

   countBubble.textContent = cart.length;
};

//Increments the current count of products on the cart
const addItemsToCartArray = (product) => {
   cart.push(product);

   if (cart.length > 0) {
      countBubble.classList.add("visible");
   }

   countBubble.textContent = cart.length;
};

//Handlers for buttons
const handleButtonRemoveFromCart = (ev) => {
   const product = ev.target.parentNode;
   removeProductFromCart(product);
};

const handleButtonAddToCart = (ev) => {
   const product = newProductObject(ev.target.parentNode);
   setProductOnCart(product);
};

const handleButtonShowCart = () => {
   if (cartDetail.classList.contains("cart__detail--visible")) {
      cartDetail.classList.remove("cart__detail--visible");
      return;
   }
   cartDetail.classList.add("cart__detail--visible");
};

const setCartController = () => {
   productCards.forEach((productCard) => {
      productCard.lastElementChild.addEventListener(
         "click",
         handleButtonAddToCart
      );
   });
   cartButton.addEventListener("click", handleButtonShowCart);
};

setCartController();
