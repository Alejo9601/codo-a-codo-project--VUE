const getProductsForCategory = (category, limit = 100, sort = "asc") => {
  category = escape(category);
  return fetch(
    `https://fakestoreapi.com/products/category/${category}?limit=${limit}&sort=${sort}`
  ).then((response) => response.json());
};

export { getProductsForCategory };
