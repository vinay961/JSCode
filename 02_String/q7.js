
function generateSearchURL(baseURL, searchQuery, categoryFilter) {
    return baseURL + "/" + searchQuery + "/" + categoryFilter;
}

// Example usage
let baseURL = "https://www.example.com/search";
let searchQuery = "apple";
let categoryFilter = "electronics";

let fullURL = generateSearchURL(baseURL, searchQuery, categoryFilter);
console.log(fullURL);






  