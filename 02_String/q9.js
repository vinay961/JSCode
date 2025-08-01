
function searchProducts(products, searchQuery) {
    const list = [];
    products.filter((product) => {
        if(product.toUpperCase() == searchQuery.toUpperCase()){
            list.push(product);
        }
    })
    return list
}

// Example usage
let products = ["Apple", "banana", "Orange", "grape", "APPLE"];
let searchQuery = "apple";

let searchResult = searchProducts(products, searchQuery);
console.log(searchResult);  // ["Apple", "APPLE"]







  