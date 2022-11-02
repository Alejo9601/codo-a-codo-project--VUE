import { getProductsForCategory } from "./apiCalls.js"

const getNewProducts = () => {
    return getProductsForCategory("electronics",4,"desc")
}

export default getNewProducts;